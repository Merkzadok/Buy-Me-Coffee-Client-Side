"use client";
import { Button } from "@/components/ui/button";
import { DonationItemType, ProfileType } from "@/types/DonationType";
import axios from "axios";
import { error } from "console";

import { ChevronDown, Heart } from "lucide-react";

import { ChevronDown, ChevronUp, Heart } from "lucide-react";

import { useEffect, useState } from "react";
import { LoaderCoffee } from "../loading.tsx/loader";

type userDataprops = {
  userData: ProfileType;
};

export const DonationSupporters = ({ userData }: userDataprops) => {
  const [supporters, setSupporters] = useState<DonationItemType[]>([]);
  const [loading, setLoading] = useState(false);

  console.log("UserData:", userData);

  const [showAll, setShowAll] = useState(false);


  const visibleSupporters = showAll ? supporters : supporters.slice(0, 3);

  const handleSupporters = async () => {
    axios
      .get(`http://localhost:4001/donation/received/${userData.userId}`)
      .then((response) => {
        const data = response.data.donations;
        setSupporters(data);
      })
      .catch((error) => {
        console.error("Error fetching supporters:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!userData || !userData.userId) return;
    handleSupporters();
  }, [userData]);



  const profileImages = [
  "https://cdn.buymeacoffee.com/uploads/profile_pictures/default/v2/80BEAF/VE.png@200w_0e.webp",
  "https://cdn.buymeacoffee.com/uploads/profile_pictures/default/v2/DEBBB9/SK.png@200w_0e.webp",
  "https://cdn.buymeacoffee.com/uploads/profile_pictures/default/v2/C2D9E1/HT.png@200w_0e.webp",
  "https://cdn.buymeacoffee.com/uploads/profile_pictures/default/v2/EFC16D/PV.png@200w_0e.webp"
];

// Random 
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * profileImages.length);
  return profileImages[randomIndex];
};

 

  return (
    <div>
      {loading && <LoaderCoffee />}
      <div className="p-6 pt-9 border w-[633px] rounded-lg flex flex-col gap-6">
        <h1 className="font-semibold">Recent Supporters</h1>
        {supporters.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-6 pt-9 border rounded-lg">
            <Heart className="fill-black" />
            <p>Be the first one to support {userData?.name}</p>
          </div>
        ) : (
          visibleSupporters.map((donation, index) => (
            <div key={index} className="flex gap-3 items-center">
              <img
                src={getRandomImage()}
                alt="profile zurag"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex gap-1">
                  <h2 className="font-semibold">
                    {donation.socialURLOrBuyMeACoffee}
                  </h2>
                  <h3 className="font-medium">
                    bought ${donation.amount} coffee
                  </h3>
                </div>
                <p>{donation.specialMesssage}</p>
              </div>
            </div>
          ))
        )}

        {supporters.length > 3 && (
          <Button variant="outline" className="w-full" onClick={() => setShowAll(!showAll)}>
            {showAll ? (
              <>
                See Less <ChevronUp className="ml-2" />
              </>
            ) : (
              <>
                See More <ChevronDown className="ml-2" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};
