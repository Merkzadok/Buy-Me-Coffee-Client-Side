"use client";

import { DonationPage } from "@/components/donation/DonationPage";
import { UserContext } from "@/provider/currentUserProvider";
import { useContext } from "react";


export default function Donation() {
  
  const{userProvider} = useContext(UserContext);


  const username = userProvider?.username;

  return <DonationPage isEditable={true} username={username} />;
}
