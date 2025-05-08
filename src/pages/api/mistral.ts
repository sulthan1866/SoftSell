import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const openRouterRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: "You are SoftSell's helpful assistant. Answer questions about our software resale services clearly and concisely. format it as a ReactNode with <br/> tags if applicable" },
          { role: "user", content: message }
        ],
      }),
    });

    const data = await openRouterRes.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message || "AI error" });
    }

    return res.status(200).json(data);
  } catch  {
    return res.status(500).json({ error: "Something went wrong while calling the AI service." });
  }
}
