import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

type usersSectionType = {
  name:string,
  avatarUrl:string,
  about:string,
  socialMediaUrl:string
}

type itemType = {
  item:usersSectionType
}

export const ExploreUserSection = ({ item }:itemType) => {
  const { name, avatarUrl, about, socialMediaUrl } = item;
  return (
    <div className="w-[910px]  p-6 border-1 rounded-lg border-zinc-200 h-[230px]">
      <div className="flex justify-between items-center mb-[12px]">
        <div className="flex items-center gap-3 text-xl">
          <img
            src={avatarUrl}
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full"
          />
          <p className="text-xl font-semibold">{name}</p>
        </div>

        <Button variant="secondary">
          View profile <SquareArrowOutUpRight />
        </Button>
      </div>

      <div className="flex gap-5 lg:gap-10 ">
        <div className="w-3/5">
          <p className="text-base font-semibold mb-[14px]">About {name}</p>
          <p className="text-sm">{about}</p>
        </div>

        <div className="w-2/5">
          <p className="text-base font-semibold mb-[14px] ">Social media URL</p>
          <p className="text-sm">{socialMediaUrl}</p>
        </div>
      </div>
    </div>
  );
};
