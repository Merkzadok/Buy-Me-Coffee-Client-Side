import { Button } from "@/components/ui/button";
import {
  DonationItemType,
  ProfileType,

} from "@/types/DonationType";
import { ChevronDown, Heart } from "lucide-react";

type userDataprops = {
  userData: ProfileType;
};

export const DonationSupporters = ({ userData }: userDataprops) => {
  return (
    <div>
      <div className="p-6 border w-[632px] rounded-lg">
        <h1 className="pb-3 font-semibold">Recent Supporters</h1>
        <div className="p-6  pt-9 border w-full rounded-lg flex flex-col justify-center items-center">
          <Heart className="fill-black" />
          <p>Be the first one to support {userData?.name}</p>
        </div>

        <div className="p-6  pt-9 border w-full rounded-lg flex flex-col gap-6">
          {/* {userData?.donations?.map((donation: DonationItemType) => ( */}
          <div className=" flex gap-3 items-center">
            <img
              src="https://i.pinimg.com/736x/68/fc/d2/68fcd2232839c8a153f7f0c2de3d6130.jpg"
              alt="profile zurag"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex gap-1">
                <h2 className="font-semibold">Chultem</h2>
                <h3 className="font-medium">bought $5 coffee</h3>
              </div>
              <p>Thank you for being so awesome everyday! </p>
            </div>
          </div>
          {/* ))} */}

          <Button variant="outline" className="w-full">
            See More <ChevronDown />
          </Button>
        </div>
      </div>
    </div>
  );
};
