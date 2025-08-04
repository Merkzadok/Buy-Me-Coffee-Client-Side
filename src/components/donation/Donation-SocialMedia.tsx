import { ProfileType } from "@/types/DonationType";

export const DonationSocialMedia = ({
  userData,
}: {
  userData: ProfileType;
}) => {
  return (
    <div>
      <div className="p-6 border w-[632px] rounded-lg">
        <h1 className="font-semibold">Social media URL</h1>
        <h2 className="font-normal mt-3">{userData?.socialMediaURL}</h2>
      </div>
    </div>
  );
};
