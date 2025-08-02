"use client";

import { useRef, useState } from "react";
import Image from "next/image";
// import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function DonationBackground() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const [isEditing, setIsEditing] = useState(false); // shine state hiisen
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    // setIsEditing(true); //edit mode
    fileInputRef.current?.click();
  };

  const handleCancel = () => {
    // setIsEditing(false); // butsaaj editiig tsutslnaaaaaa
    setImageUrl(null);
  };

  const handleSave = () => {
    // setIsEditing(false); // hadaglah
    alert("Changes saved");
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const coverURL = process.env.NEXT_PUBLIC_COVER_URL || "";
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "coverImage");

    setLoading(true);
    try {
      const res = await fetch(
        coverURL, // user iin cover image ees zurgiig solih
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      if (data.secure_url) {
        setImageUrl(data.secure_url);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };
  // console.log(isEditing);
  return (
    <div className="relative w-full h-100 bg-gray-100 rounded-lg overflow-hidden shadow-md z-10">
      {/* cover image preview */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400"></div>
      )}

      <div className="absolute  bottom-50 left-[50%] -translate-x-1/2">
        {!imageUrl && (
          <button
            onClick={handleImageClick}
            className="flex gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition "
          >
            <Camera />
            {loading ? "Uploading..." : "Add a cover image"}
          </button>
        )}

        {imageUrl && (
          <div>
            <Button onClick={handleSave}>Save Changes</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </div>
        )}

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
}
