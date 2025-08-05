"use client";

import { DonationPage } from "@/components/donation/DonationPage";
import { UserContext } from "@/provider/currentUserProvider";
import { useContext } from "react";

// const userData = {
//   id: "user_123",
//   username: "Hulan",
//   donations: [
//     {
//       id: 101,
//       amount: 5,
//       specialMesssage: "Сайн хийж байна шүү!",
//       socialURLOrBuyMeACoffee: "https://twitter.com/fan1",
//       donorId: 2,
//       recipientId: 4,
//       createdAt: "2025-08-01T09:30:00.000Z",
//       updatedAt: "2025-08-01T09:30:00.000Z",
//     },
//   ],
//   profile: {
//     name: "Hulan Dev",
//     about: "Full-stack developer passionate about clean UI and coffee ☕",
//     avatarImage:
//       "https://i.pinimg.com/1200x/43/f7/ee/43f7eefe75d8d3a236dacb312186dc7e.jpg",
//     backgroundImage: "https://example.com/background.jpg",
//     socialMediaURL: "https://twitter.com/bolor_dev",
//     successMessage: "Баярлалаа! 🧡 Coffee авсан чинь их урам өглөө.",
//   },
// };

export default function Donation() {
  
  const{userProvider} = useContext(UserContext);
  console.log("CONTEXT USER VIEW:", userProvider.username);

  const username = userProvider?.username;

  return <DonationPage isEditable={true} username={username} />;
}
