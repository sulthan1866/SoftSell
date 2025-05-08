"use client";
import { usePathname } from "next/navigation";

export default function CatchAllPage() {
  const pathname = usePathname();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">You visited: {pathname} Page</h1>
    </div>
  );
}
