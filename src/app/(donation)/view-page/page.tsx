"use client";

import { DonationPage } from "@/components/donation/DonationPage";
import { UserContext } from "@/provider/currentUserProvider";
import { useContext } from "react";


export default function Donation() {
  
  const{userProvider} = useContext(UserContext);
  console.log("CONTEXT USER VIEW:", userProvider.username);

  const username = userProvider?.username;

  return <DonationPage isEditable={true} username={username} />;
}
