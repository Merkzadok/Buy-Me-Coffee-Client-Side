import { Header } from "@/components/Header";
import { DonationProfile } from "./components/Donation-Profile";
import { DonationSocialMedia } from "./components/Donation-SocialMedia";
import { DonationBuyCoffeeCart } from "./components/DonationBuyCoffeeCart";
import { DonationSupporters } from "./components/DonationSupporters";
import DonationBackground from "./components/Donation-Background";


export default function Donation() {
  return (
    <div>
      <div className="relative">
        <DonationBackground />
      </div>
      <div className="flex gap-5 justify-center ">
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
