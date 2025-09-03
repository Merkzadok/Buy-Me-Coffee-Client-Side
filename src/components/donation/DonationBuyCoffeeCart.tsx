"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Coffee } from "lucide-react";
import { useContext, useState } from "react";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { UserContext } from "@/provider/currentUserProvider";
import { LoaderCoffee } from "../loading.tsx/loader";
import { toast } from "sonner";
import { DonationComplatePage } from "./succes";

type DonationSupportType = {
  isEditable: boolean;
  userid: number;
  name: string;
};

export const DonationBuyCoffeeCart = ({
  isEditable,
  userid,
  name,
}: DonationSupportType) => {
  const [amount, setAmount] = useState(0);

  const [socialUrl, setSocialUrl] = useState("");
  const [specialMsg, setSpecialMsg] = useState("");

  const [loading, setLoading] = useState(false);

  const { userProvider } = useContext(UserContext);

  const handleSupport = async () => {
    setLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/create-donation`, {
        amount,
        donorId: userProvider.id,
        recipientId: userid,
        socialURLOrBuyMeACoffee: socialUrl,
        specialMesssage: specialMsg,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.custom(
            (t) => (
              <div className="bg-white p-4 rounded-lg w-[600px] flex flex-col items-center">
                <DonationComplatePage />
              </div>
            ),
            {
              position: "top-center",
              duration: 3000,
            }
          );
        }
      })
      .catch((error) => {
        toast.error("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const amounts = [1, 2, 5, 10];

  return (
    <div>
      {loading && <LoaderCoffee />}
      <div className="p-6 border w-[632px] h-[509px] rounded-lg bg-white">
        <div className="flex flex-col gap-6 ">
          <h1 className="font-semibold">Buy &quot;{name}&quot; a Coffee</h1>

          <div className="flex flex-col gap-2">
            <p className="font-medium">Select amount:</p>
            <div className="flex gap-3">
              {amounts.map((value) => (
                <Button
                  key={value}
                  variant={amount === value ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setAmount(value)}
                >
                  <Coffee className="mr-2" />${value}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid items-center gap-2 pt-8">
          <Label htmlFor="text" className="font-medium">
            Enter BuyMeCoffee or social account URL:
          </Label>
          <Input
            type="url"
            id="text"
            placeholder="buymeacoffee.com/"
            className="w-full"
            onChange={(e) => setSocialUrl(e.target.value)}
          />
        </div>

        <div className="grid items-center gap-2 pt-5">
          <Label htmlFor="text" className="font-medium">
            Special message:
          </Label>
          <Textarea
            id="text"
            placeholder="Please write your message here"
            className="w-full h-[131px] resize-none"
            onChange={(e) => setSpecialMsg(e.target.value)}
          />
        </div>

        <div className="w-full mt-8">
          {!isEditable ? (
            <Button className="w-full" onClick={handleSupport}>
              Support
            </Button>
          ) : (
            <Button className="w-full" disabled>
              Support
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
