"use client";
import { Camera } from "lucide-react";
import React, { useRef } from "react";

export const DonationBackground = () => {
  
const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("Сонгосон файл:", file);
  };
  return (
    <div className="m-auto">
      
      <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
        <button
          onClick={handleClick}
          className="flex gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition ">
          <Camera/><p>Add a cover image</p>
        </button>

        {/* Далд input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    
    </div>
  );
};
