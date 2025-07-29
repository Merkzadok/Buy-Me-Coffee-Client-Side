import { DonationBackground } from "./components/Donation-Background";
import { DonationBuyCoffeeCart } from "./components/Donation-BuyCoffeeCart";
import { DonationProfile } from "./components/Donation-Profile";
import { DonationSocialMedia } from "./components/Donation-SocialMedia";
import { DonationSupporters } from "./components/Donation-Supporters";

export default function Donation() {
  return (
    <div>
      <DonationBackground/>
      <DonationProfile/>
      <DonationSocialMedia/>
      <DonationSupporters/>
      <DonationBuyCoffeeCart/>
    </div>
  );
}