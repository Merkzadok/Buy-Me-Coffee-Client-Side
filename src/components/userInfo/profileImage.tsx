"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function DonationBackground() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "coverImage");

    setLoading(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/duw6cdsyv/image/upload", // user iin cover image ees zurgiig solih
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

  return (
    <div className="relative w-full h-100 bg-gray-100 rounded-lg overflow-hidden shadow-md z-50">
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
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          no image
        </div>
      )}

      {/* Upload button like Facebook */}
      <div className="absolute  bottom-50 left-[50%] -translate-x-1/2">
        <button
          onClick={handleImageClick}
          className="flex gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition "
        >
          {loading ? "Uploading..." : "Edit Cover Photo"}
        </button>
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
