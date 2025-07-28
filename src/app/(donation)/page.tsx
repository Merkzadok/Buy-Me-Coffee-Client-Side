import { DonationBackground } from "./components/Donation-Background";
import { DonationProfile } from "./components/Donation-Profile";
import { DonationSocialMedia } from "./components/Donation-SocialMedia";

export default function Donation() {
  return (
    <div>
      <DonationBackground/>
      <DonationProfile/>
      <DonationSocialMedia/>
    </div>
  );
}