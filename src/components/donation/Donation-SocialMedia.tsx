import { UserDataType } from "@/types/DonationType";

type userDataprops = {
  userData: UserDataType;
};

export const DonationSocialMedia = ({ userData }: userDataprops) => {
  return (
    <div>
      <div className="p-6 border w-[632px] rounded-lg">
        <h1 className="font-semibold">Social media URL</h1>
        <h2 className="font-normal">{userData.profile.socialMediaURL}</h2>
      </div>
    </div>
  );
};
