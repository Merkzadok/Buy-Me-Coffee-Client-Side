import { Button } from "@/components/ui/button";
import axios from "axios";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type usersSectionType = {
  name: string;
  avatarImage: string;
  about: string;
  socialMediaURL: string;
};

type itemType = {
  item: usersSectionType;
};

export const ExploreUserSection = ({ item }: itemType) => {
  console.log("itemm:", item.user.username);

  const { name, avatarImage, about, socialMediaURL } = item;
  return (
    <div className=" p-6 border-1 rounded-lg border-zinc-200 h-[230px]">
      <div className="flex justify-between items-center mb-[12px]">
        <div className="flex items-center gap-3 text-xl">
          <img
            src={avatarImage}
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full"
          />
          <p className="text-xl font-semibold">{name}</p>
        </div>

        <Link href={`/${item.user.username}`}>
          <Button variant="secondary">
            View profile <SquareArrowOutUpRight />
          </Button>
        </Link>
      </div>

      <div className="flex gap-5 lg:gap-10 ">
        <div className="w-3/5">
          <p className="text-base font-semibold mb-[14px]">About {name}</p>
          <p className="text-sm">{about}</p>
        </div>

        <div className="w-2/5">
          <p className="text-base font-semibold mb-[14px] ">Social media URL</p>
          <p className="text-sm">{socialMediaURL}</p>
        </div>
      </div>
    </div>
  );
};
