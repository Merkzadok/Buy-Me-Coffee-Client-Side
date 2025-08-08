"use client";

import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex gap-10  justify-center">
      <div className="w-[80%] bg-red-300">
        <Sidebar />
      </div>
    </div>
  );
}
