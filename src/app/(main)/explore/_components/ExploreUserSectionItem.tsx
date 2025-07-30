import { Button } from "@/components/ui/button";
import { SquareArrowUpRight } from "lucide";
import { SquareArrowOutUpRight } from "lucide-react";

export const ExploreUserSection = ({ item }: any) => {
  const { name, avatarUrl, about, socialMediaUrl } = item;
  return (
    <div className="md:w-[910px] lg:w-[1152px] p-6 border-1 rounded-lg border-zinc-200">
      <div className="flex justify-between items-center mb-[12px] bg-yellow-200">
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

      <div className="flex gap-5 lg:gap-10 bg-blue-400">
        <div>
          <p className="text-base font-semibold mb-[14px]">About {name}</p>
          <p className="text-sm">{about}</p>
        </div>

        <div className="bg-pink-200">
          <p className="text-base font-semibold mb-[14px] ">Social media URL</p>

          <p className="text-sm">{socialMediaUrl}</p>
        </div>
      </div>
    </div>
  );
};
