"use client";

import { EditCreditCard } from "./EditCreditCard";
import { EditProfile } from "./EditProfile";
import { EditSuccessPage } from "./EditSuccessPage";
import { NewPassword } from "./NewPassword";

export const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-8 justify-center w-[910px]">
      <div>
        <p className="text-[24px] font-semibold mb-6">My account</p> <EditProfile />
      </div>
      <div>
        <NewPassword />
      </div>
      <div>
        <EditCreditCard />
      </div>
      <div>
        <EditSuccessPage />
      </div>
    </div>
  );
};
