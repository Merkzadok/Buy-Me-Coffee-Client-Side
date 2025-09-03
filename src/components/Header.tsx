"use client";

import { ChevronDown, CoffeeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ProfileType } from "@/types/DonationType";
import axios, { AxiosError } from "axios";
import { UserContext } from "@/provider/currentUserProvider";
import { toast } from "sonner";

export const Header = () => {
  const pathName = usePathname();

  const { push } = useRouter();

  const onLogInPage = pathName.includes("/login");

  const onSignUpPage = pathName.includes("/sign-up");

  const onCreateProfile = pathName.includes("/create-profile");

  const { userProvider } = useContext(UserContext);

  const [userData, setUserData] = useState({} as ProfileType);

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

  return (
    <div className="justify-between flex my-4 ">
      <Link href={"/home"}>
        <p className="font-bold flex gap-[10px] cursor-pointer">
          <CoffeeIcon className="w-6" />
          Buy Me Coffee
        </p>
      </Link>
      <div>
        <div>
          {onLogInPage && (
            <Button variant="secondary" onClick={() => push("/sign-up")}>
              Sign up
            </Button>
          )}

          {onSignUpPage && (
            <Button variant="secondary" onClick={() => push("/login")}>
              Login
            </Button>
          )}

          {onCreateProfile && (
            <Button variant="secondary" onClick={() => push("/login")}>
              Log out
            </Button>
          )}

          {!onLogInPage && !onSignUpPage && !onCreateProfile && (
            <div className="flex gap-2 items-center">
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

              <p className="pr-9 pt-1 ">{userData.name}</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="border-none">
                    <ChevronDown></ChevronDown>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[187px]">
                  <Button
                    variant="outline"
                    className="border-none"
                    onClick={() => {
                      localStorage.removeItem("token");
                      push("/login");
                    }}
                  >
                    Log out
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
