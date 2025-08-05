"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Coffee } from "lucide-react";
import { useState } from "react";
import { QRdialog } from "./QR-Dialog";
import { DonationUserUIType } from "@/types/DonationType";
import { Textarea } from "../ui/textarea";

export const DonationBuyCoffeeCart = ({ isEditable }: DonationUserUIType) => {
  const [amount, setAmount] = useState(0);
  console.log("amount:", amount);

  return (
    <div className="p-6 border w-[632px] h-[509px] rounded-lg bg-white">
      <div className="flex flex-col gap-6 ">
        <h1 className="font-semibold">Buy Moloko a Coffee</h1>

        <div className="flex flex-col gap-2">
          <p className="font-medium">Select amount:</p>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              className="cursor-pointer hover:bg-gray-400  focus:border-2 border-black"
              onClick={() => setAmount(1)}
            >
              <Coffee />
              $1
            </Button>
            <Button
              variant="secondary"
              className="cursor-pointer hover:bg-gray-400  focus:border-2 border-black"
              onClick={() => setAmount(2)}
            >
              <Coffee />
              $2
            </Button>
            <Button
              variant="secondary"
              className="cursor-pointer hover:bg-gray-400  focus:border-2 border-black"
              onClick={() => setAmount(5)}
            >
              <Coffee />
              $5
            </Button>
            <Button
              variant="secondary"
              className="cursor-pointer hover:bg-gray-400  focus:border-2 border-black"
              onClick={() => setAmount(10)}
            >
              <Coffee />
              $10
            </Button>
          </div>
        </div>
      </div>

      <div className="grid items-center gap-2 pt-8">
        <Label htmlFor="text" className="font-medium">
          Enter BuyMeCoffee or social acount URL:
        </Label>
        <Input
          type="text"
          id="text"
          placeholder="buymeacoffee.com/"
          className="w-full"
        />
      </div>

      <div className="grid items-center gap-2 pt-5">
        <Label htmlFor="text" className="font-medium">
          Special message:
        </Label>
        <Textarea
          //   type="text"
          id="text"
          placeholder="Please write your message here"
          className="w-full h-[131px] resize-none"
        />
      </div>
      <div className="w-full mt-8">
        {!isEditable ? (
          <QRdialog />
        ) : (
          <Button className="w-full" disabled={true}>
            Support
          </Button>
        )}
      </div>
    </div>
  );
};
