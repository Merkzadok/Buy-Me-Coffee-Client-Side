"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AmountType } from "@/types/types";

export const Amount = ({
  amountSelected,
  handleAmountSelect,
  donationAmounts,
}: AmountType) => {
  return (
    <div className="mt-7 flex justify-between">
      <p className="font-[500] ">Recent transactions</p>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Amount {amountSelected} <ChevronDown></ChevronDown>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuGroup>
              {donationAmounts?.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  onSelect={() => handleAmountSelect(item.amount)}
                >
                  {item.amount}
                  {amountSelected === item.amount && (
                    <Checkbox
                      checked
                      className="ml-2 h-4 w-4  text-green-400"
                    />
                  )}
                  {/* {amountSelected === item.amount &&
                    donationAmounts.filter((i) => i.amount !== item.amount)} */}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
