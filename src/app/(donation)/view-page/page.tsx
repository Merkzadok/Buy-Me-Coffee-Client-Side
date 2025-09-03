"use client";

import { DonationPage } from "@/components/donation/DonationPage";
import { Header } from "@/components/Header";
import { UserContext } from "@/provider/currentUserProvider";
import { useContext } from "react";

export default function Donation() {
  const { userProvider } = useContext(UserContext);

  const username = userProvider?.username;

  return (
    <div className="max-w-400 justify-between items-center mx-auto ">
      <Header />
      <DonationPage isEditable={true} username={username} />
    </div>
  );
}
