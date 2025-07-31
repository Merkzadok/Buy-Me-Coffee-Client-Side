import { Header } from "@/components/Header";
import { DonationProfile } from "./components/Donation-Profile";
import { DonationSocialMedia } from "./components/Donation-SocialMedia";
import { DonationBuyCoffeeCart } from "./components/DonationBuyCoffeeCart";
import { DonationSupporters } from "./components/DonationSupporters";
import DonationBackground from "./components/Donation-Background";


export default function Donation() {
  return (
    <div className="w-[100%] ml-20 xl:ml-40 relative">
      <div className=" w-[1440px]">
        <DonationBackground />
      </div>
      <div className="flex gap-5 justify-center absolute top-80 z-50 left-20">
        <div className="flex flex-col gap-5">
          <DonationProfile />
          <DonationSocialMedia />
          <DonationSupporters />
        </div>
        <DonationBuyCoffeeCart />
      </div>
    </div>
  );
}
