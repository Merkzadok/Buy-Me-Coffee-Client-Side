
import { DonationUserUIType } from "@/types/DonationType";
import DonationBackground from "./Donation-Background";
import { DonationProfile } from "./Donation-Profile";
import { DonationSocialMedia } from "./Donation-SocialMedia";
import { DonationSupporters } from "./DonationSupporters";
import { DonationBuyCoffeeCart } from "./DonationBuyCoffeeCart";

export const DonationPage = ({ isEditable, userData }: DonationUserUIType) => {
  return (
    <div className="w-[100%] ml-20 xl:ml-40 relative">
      <div className=" w-[1440px]">
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
