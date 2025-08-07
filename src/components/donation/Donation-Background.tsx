"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonationUserUIType } from "@/types/DonationType";
import { UserContext } from "@/provider/currentUserProvider";
import axios from "axios";

import { useFormik } from "formik";
import { error } from "console";


import { LoaderCoffee } from "../loading.tsx/loader";

export default function DonationBackground({
  isEditable,
  userData,
}: DonationUserUIType) {
  // const { backgroundImage } = userData.userProfile;
  console.log(userData);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { userProvider } = useContext(UserContext);

  const [imageUrl, setImageUrl] = useState<string | null>(
    userData.backgroundImage || null
  ); //cloudnary-s awach baigaa state

  const [loading, setLoading] = useState(false);

  const [showChangeButton, setShowChangeButton] = useState(true);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleCancel = () => {
    setImageUrl(null);
    setShowChangeButton(false);
  };



//Cloudinary-с авсан зурагны линк (urlCloud)-ийг backend рүү PUT хүсэлтээр илгээнэ.

  const handleSave = async (urlCloud: string) => {
    setLoading(true);
    axios
      .put(`http://localhost:4001/profile/${userProvider.profileId}`, {
        backgroundImage: urlCloud,
      })
      .then((response) => {
        console.log("CLOUD RESPONSE ", response.data.profile.backgroundImage);
        console.log("CLOUD IMAGE URLL:", imageUrl);
        console.log("USER PROVIDER4 BACKGPRUND", userData.backgroundImage);

        setShowChangeButton(true);
        setImageUrl(response.data.profile.backgroundImagel);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (userData?.backgroundImage) {
      setImageUrl(userData.backgroundImage);
      // setShowChangeButton(false);
    }
  }, [userData?.backgroundImage]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const coverURL = process.env.NEXT_PUBLIC_COVER_URL || "";
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "coverImage");
    console.log(process.env.NEXT_PUBLIC_COVER_URL);
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
      console.log(data);
      if (data.secure_url) {
        setImageUrl(data.secure_url);
        console.log("data.secure_url", data.secure_url);
        // handleSave(data.secure_url);

        setShowChangeButton(false);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-100 bg-gray-100 rounded-lg overflow-hidden shadow-md z-10">
      {loading&&<LoaderCoffee/>}
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
        <div className="absolute  bottom-80 left-[1300px] -translate-x-1/2">
          {!imageUrl && (
            <Button
              onClick={handleImageClick}
              variant="ghost"
            >
              <Camera />
              {loading ? "Uploading..." : "Add a cover image"}
            </Button>
          )}

          {imageUrl && !showChangeButton && (

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleSave(imageUrl)}>Save Changes</Button>
              <Button variant="outline" onClick={handleCancel}>Cancel</Button>

            </div>
          )}

          {imageUrl && showChangeButton && (
            <Button
              onClick={handleImageClick}
              variant="ghost"
            >
              <Camera />
              Change Cover
            </Button>
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
