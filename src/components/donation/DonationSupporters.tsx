"use client";
import { Button } from "@/components/ui/button";
import { DonationItemType, ProfileType } from "@/types/DonationType";
import axios from "axios";
import { ChevronDown, Heart } from "lucide-react";
import { useEffect, useState } from "react";

type userDataprops = {
  userData: ProfileType;
};

export const DonationSupporters = ({ userData }: userDataprops) => {
  const [supporters, setSupporters] = useState<DonationItemType[]>([]);
  console.log("UserData:", userData);

  // const [user, setUser] = useState()

  const handleSupporters = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/donation/received/${userData.userId}`
      );
      const data = response.data.donations;

      console.log("SUNSLEG DATA:", data);

      setSupporters(data);
    } catch (error) {
      console.error("Error fetching supporters:", error);
    }
  };

  useEffect(() => {
    if(!userData || !userData.userId) return;
    handleSupporters();
  }, [userData]);
  return (
    <div>
      <div className="p-6 pt-9 border w-full rounded-lg flex flex-col gap-6">
        <h1 className="font-semibold">Recent Supporters</h1>
        {supporters.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <Heart className="fill-black" />
            <p>Be the first one to support {userData?.name}</p>
          </div>
        ) : (
          supporters.map((donation, index) => (
            <div key={index} className="flex gap-3 items-center">
              <img
                src="https://cdn.buymeacoffee.com/uploads/profile_pictures/default/v2/80BEAF/VE.png@200w_0e.webp"
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

        {/* <Button variant="outline" className="w-full">
            See More <ChevronDown />
          </Button> */}
        {supporters.length > 3 && (
          <Button variant="outline" className="w-full">
            See More <ChevronDown />
          </Button>
        )}
      </div>
    </div>
  );
};
