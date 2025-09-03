"use client";

import { ProfileType } from "@/types/DonationType";
import DonationBackground from "./Donation-Background";
import { DonationProfile } from "./Donation-Profile";
import { DonationSocialMedia } from "./Donation-SocialMedia";
import { DonationSupporters } from "./DonationSupporters";
import { DonationBuyCoffeeCart } from "./DonationBuyCoffeeCart";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { LoaderCoffee } from "../loading.tsx/loader";
import { toast } from "sonner";

export const DonationPage = ({
  isEditable,
  username,
}: {
  isEditable: boolean;
  username: string;
}) => {
  const { push } = useRouter();

  const [userData, setUserData] = useState({} as ProfileType);
  const [loading, setLoading] = useState(false);

  const getDonationPage = async () => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/view/${username}`)
      .then((response) => {
        const data = response?.data;
        setUserData(data?.userProfile);
      })
      .catch((error) => {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const errorMessage = (axiosError.response.data as { message: string })
            .message;

          if (errorMessage === "User profile not found.") {
            toast.error("Please enter your profile details!");

            push("/create-profile");
          } else {
            toast.error(`error ${errorMessage}`);
          }
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!username) return;
    getDonationPage();
  }, [username, isEditable]);

  if (loading) {
    return <LoaderCoffee />;
  }

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
        <DonationBuyCoffeeCart
          isEditable={isEditable}
          userid={userData.userId}
          name={userData.name}
        />
      </div>
    </div>
  );
};
