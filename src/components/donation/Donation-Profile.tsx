import { DonationUserUIType } from "@/types/DonationType";
import { DialogDemo } from "../../app/(donation)/view-page/components/Dialog";

export const DonationProfile = ({ isEditable,userData }: DonationUserUIType) => {
  return (
    <div>
      <div className="p-6 border w-[632px] rounded-lg bg-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={userData?.avatarImage}
              alt="profile zurag"
              className="w-12 h-12 rounded-full"
            />
            <p className="font-bold">{userData?.name}</p>
          </div>

          {isEditable && <DialogDemo />}
        </div>

        <div className="border mt-6 mb-6"></div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">About {userData?.name}</h1>
          <h2 className="font-normal">
            {userData.about}
          </h2>
        </div>
      </div>
    </div>
  );
};
