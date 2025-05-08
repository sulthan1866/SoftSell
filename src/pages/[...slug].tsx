"use client";
import Layout from "@/components/Layout";
import { usePathname } from "next/navigation";

export default function CatchAllPage() {
const path = usePathname()
  return (
    <Layout >
      <div className="p-4">
        <h1 className="text-xl font-bold"> You visited: {path} Page </h1>
      </div>
    </Layout>
  );
}
