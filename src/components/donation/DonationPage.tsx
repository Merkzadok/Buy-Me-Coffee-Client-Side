"use client"

import { DonationUserUIType } from "@/types/DonationType";
import DonationBackground from "./Donation-Background";
import { DonationProfile } from "./Donation-Profile";
import { DonationSocialMedia } from "./Donation-SocialMedia";
import { DonationSupporters } from "./DonationSupporters";
import { DonationBuyCoffeeCart } from "./DonationBuyCoffeeCart";
import { useEffect, useState } from "react";
import axios from "axios";

export const DonationPage = ({ isEditable, userData }: DonationUserUIType) => {


  const [user, setUser] = useState([]);

  const getExplore = async () => {
    try {
      const response = await axios.get("http://localhost:4001/profile/view/L-era67");

      const data = await response.data;

      setUser(data?.profile);

      console.log("explre rspinse:", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExplore();
  }, []);
  console.log("user:", user);
  

  return (
    <div className="max-w-[1440px] relative m-auto">
      <div>
        <DonationBackground isEditable={isEditable} userData={userData} />
      </div>
      <div className="flex gap-5 justify-center absolute top-80 z-50 left-20">
        <div className="flex flex-col gap-5">
          <DonationProfile isEditable={isEditable} userData={userData}/>
          <DonationSocialMedia userData={userData}/>
          <DonationSupporters userData ={userData}/>
        </div>
        <DonationBuyCoffeeCart isEditable={isEditable} userData={userData}/>
      </div>
    </div>
  );
};
