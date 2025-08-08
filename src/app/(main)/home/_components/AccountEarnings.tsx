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
import { use, useContext, useEffect, useState } from "react";
import { ProfileType } from "@/types/DonationType";
import axios, { AxiosError } from "axios";
import { subDays } from "date-fns";

import { toast } from "sonner";

export const AccountEarnings = () => {
  const [selected, setSelected] = useState("Select");
  const [totalEarnings, setTotalEarnings] = useState<number>();
  const { userProvider } = useContext(UserContext);
  const [userData, setUserData] = useState({} as ProfileType);
  const [dateRange, setDateRange] = useState<{
    from: string;
    to: string;
  } | null>(null);
  console.log(process.env.BACKEND_URL);
  useEffect(() => {
    const getEarnings = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/total/${userProvider.id}?from=${dateRange?.from}&to=${dateRange?.to}`;

        const response = await fetch(url);
        const data = await response.json();
        setTotalEarnings(data.total);
      } catch (error) {
        toast.error("Error");
      }
    };
    if (userProvider.id) getEarnings();
  }, [userProvider.id, dateRange]);

  const handleSelect = (value: string) => {
    setSelected(value);
    const today = new Date();
    if (value === "Last 30 days") {
      const from = subDays(today, 1).toISOString();
      const to = today.toISOString();
      setDateRange({ from, to });
    } else if (value === "Last 90 days") {
      const from = subDays(today, 90).toISOString();
      const to = today.toISOString();
      setDateRange({ from, to });
    } else if (value === "All time") {
      setDateRange(null);
    }
  };

  const getDonationPage = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/view/${userProvider.username}`
      );

      const data = await response?.data;

      setUserData(data?.userProfile);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        const errorMessage = (axiosError.response.data as { message: string })
          .message;

        if (errorMessage === "User profile not found.") {
          toast.error("Please enter your profile details!");
        } else {
          toast.error(`error ${errorMessage}`);
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
       toast.error("Error")
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
        <div className="border-1 border-[#E4E4E7] min-w-[1000px] mx-6"></div>
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
