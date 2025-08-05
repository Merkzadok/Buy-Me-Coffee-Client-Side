"use client";

import { DonationUserUIType, ProfileType } from "@/types/DonationType";
import DonationBackground from "./Donation-Background";
import { DonationProfile } from "./Donation-Profile";
import { DonationSocialMedia } from "./Donation-SocialMedia";
import { DonationSupporters } from "./DonationSupporters";
import { DonationBuyCoffeeCart } from "./DonationBuyCoffeeCart";
import { useEffect, useState } from "react";
import axios from "axios";


export const DonationPage = ({
  isEditable,
  username,
}: {
  isEditable: boolean;
  username: string;
}) => {

  console.log("isEditable",isEditable);
  console.log("USERNAME:", username);
  
  
  const [userData, setUserData] = useState({} as ProfileType);

  const getExplore = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/profile/view/${username}`
      );

      const data = await response?.data;

      setUserData(data?.userProfile);

      console.log("[USERNAME]:", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExplore();
  }, []);
  console.log("user:", userData);

  return (
    <div className="max-w-[1440px] relative m-auto">
      <div>
        <DonationBackground isEditable={isEditable} userData={userData} />
      </div>
      <div className="flex gap-5 justify-center absolute top-80 z-50 left-20">
        <div className="flex flex-col gap-5">
          <DonationProfile isEditable={isEditable} userData={userData} />
          <DonationSocialMedia userData={userData} />
          <DonationSupporters userData={userData} />
        </div>
        <DonationBuyCoffeeCart isEditable={isEditable} userData={userData} userid = {userData.id}/>
      </div>
    </div>
  );
};

// {
//     "userProfile": {
//         "id": 16,
//         "name": "Space Ranger",
//         "about": "All day, every day, we're watching, listening to, reading and absorbing politics. It's exhausting. We then report on what we've seen in a way that's as chill as possible.",
//         "avatarImage": "https://i.pinimg.com/736x/de/74/86/de74864e5816d86bf2f4d6485dd3b252.jpg",
//         "socialMediaURL": "https://buymeacoffee.com/baconpancakes1",
//         "backgroundImage": "https://i.pinimg.com/736x/e4/a7/8e/e4a78ebbeecb51b412255df090e57c0f.jpg",
//         "successMessage": "THANK YOU!",
//         "userId": 13,
//         "createdAt": "2025-08-04T05:04:35.787Z",
//         "updatedAt": "2025-08-04T05:04:35.787Z"
//     },
//     "username": "L-era67"
// }
