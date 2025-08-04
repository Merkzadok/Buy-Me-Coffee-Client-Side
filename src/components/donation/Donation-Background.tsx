"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonationUserUIType } from "@/types/DonationType";

export default function DonationBackground({
  isEditable,
  userData,
}: DonationUserUIType) {
  // const { backgroundImage } = userData.userProfile;

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [showChangeButton, setShowChangeButton] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleCancel = () => {
    setImageUrl(null);
    setShowChangeButton(false);
  };

  const handleSave = () => {
    alert("Changes saved");
    setShowChangeButton(true);
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
        setShowChangeButton(false);
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

      {isEditable && (
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

          {imageUrl && !showChangeButton && (
            <div>
              <Button onClick={handleSave}>Save Changes</Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </div>
          )}

          {imageUrl && showChangeButton && (
            <button
              onClick={handleImageClick}
              className="flex gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-2"
            >
              <Camera />
              Change Cover
            </button>
          )}

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}
