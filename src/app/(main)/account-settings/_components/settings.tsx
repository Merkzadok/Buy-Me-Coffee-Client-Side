"use client";

import { UserContext } from "@/provider/currentUserProvider";
import { EditCreditCard } from "./EditCreditCard";
import { EditProfile } from "./EditProfile";
import { EditSuccessPage } from "./EditSuccessPage";
import { NewPassword } from "./NewPassword";
import { useContext } from "react";

export const SettingsPage = () => {
  const { userProvider } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-8 justify-center w-[910px]">
      <div>
        <p className="text-[24px] font-semibold mb-6">My account</p>{" "}
        <EditProfile username={userProvider.username} profileId={userProvider.profileId} />
      </div>
      <div>
        <NewPassword />
      </div>
      <div>
        <EditCreditCard userId = {userProvider.id}/>
      </div>
      <div>
        <EditSuccessPage username={userProvider.username} profileId={userProvider.profileId}/>
      </div>
    </div>
  );
};
