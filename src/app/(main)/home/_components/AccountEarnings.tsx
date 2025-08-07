"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, SquareArrowOutUpRight } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserContext } from "@/provider/currentUserProvider";

import { useContext, useEffect, useState } from "react";

import { ProfileType } from "@/types/DonationType";
import axios, { AxiosError } from "axios";
import UsersProfile from "@/app/(donation)/[username]/page";

export const AccountEarnings = () => {
  const [selected, setSelected] = useState("Select");
  const [totalEarnings, setTotalEarnings] = useState<number>();
  const { userProvider } = useContext(UserContext);

  useEffect(() => {
    // if (!userProvider.id) {
    //   console.error("User ID is not available");
    //   return;
    // }
    const getEarnings = async () => {
      try {
        const response = await fetch(
          `http://localhost:4001/donation/total/${userProvider.id}`
        );
        const data = await response.json();
        setTotalEarnings(data.total);
      } catch (error) {
        console.error("Error fetching earnings:", error);
      }
    };
    getEarnings();
  }, [userProvider.id]);

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const [userData, setUserData] = useState({} as ProfileType);

  const getDonationPage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/profile/view/${userProvider.username}`
      );

      const data = await response?.data;

      setUserData(data?.userProfile);

      console.log("[USERNAME]:", data);
    } catch (error) {
      const axiosError = error as AxiosError;

      console.log("axiosError axiosError axiosError", axiosError);
      if (axiosError.response) {
        const errorMessage = (axiosError.response.data as { message: string })
          .message;

        if (errorMessage === "User profile not found.") {
          alert("Please enter your profile details!");
        } else {
          alert(`error ${errorMessage}`);
        }
      }
    }
  };

  useEffect(() => {
    if (!userProvider.username) return;
    getDonationPage();
  }, [userProvider.username]);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(userData.socialMediaURL)
      .then(() => {
        alert("Page link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="">
      <div className="border-2 h-[257px] border-[#E4E4E7] rounded-lg">
        <div className="mx-6 my-6 flex justify-between ">
          <div className="flex gap-4 items-center">

            {userData.avatarImage ? (
              <img
                src={userData.avatarImage}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <img
                src="https://i.pinimg.com/originals/5c/44/45/5c4445eea6c9386d27b348af65ce8278.gif"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            )}

            {userData.avatarImage?<img
              src={userData.avatarImage}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />:<img
              src="https://i.pinimg.com/originals/5c/44/45/5c4445eea6c9386d27b348af65ce8278.gif"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />}

            <div>
              <p className="font-bold">{userData.name}</p>
              <p>{userData.socialMediaURL}</p>
            </div>
          </div>
          <div>
            <Button onClick={handleShare}>
              <SquareArrowOutUpRight></SquareArrowOutUpRight>
              Share Page Link
            </Button>
          </div>
        </div>
        <div className="border-1 border-[#E4E4E7] w-[1150px] mx-6"></div>
        <div className="mx-6 my-4 ">
          <div className="flex gap-4 items-center">
            <p className="font-[600] text-[20px]">Earnings</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {selected} <ChevronDown></ChevronDown>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuItem onSelect={() => handleSelect("Last 30 days")}>
                  Last 30 days
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleSelect("Last 90 days")}>
                  Last 90 days
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleSelect("All time")}>
                  All time
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <div>
              <p className="mt-5 font-[700] text-[36px]">${totalEarnings}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
