"use client"

import { Sidebar } from "@/components/Sidebar";
import { UserContext } from "@/provider/currentUserProvider";
import { useContext } from "react";

export default function Home() {

  const context = useContext(UserContext)
  console.log("CONTEXT:", context);
  
  return (
    <div className="flex gap-10 justify-center">
      <div className="w-[80%] bg-red-300">
        <Sidebar />
      </div>
    </div>
  );
}
