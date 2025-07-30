"use client";

import { EditCreditCard } from "./EditCreditCard";
import { EditProfile } from "./EditProfile";
import { EditSuccessPage } from "./EditSuccessPage";
import { NewPassword } from "./NewPassword";

export const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-8 mx-0  justify-center ">
      <div>
        <p className="text-[24px] font-semibold">My account</p> <EditProfile />
      </div>
      <div>
        <NewPassword />
      </div>
      <div>
        <EditCreditCard />
      </div>
      <div><EditSuccessPage/></div>
    </div>
  );
};
