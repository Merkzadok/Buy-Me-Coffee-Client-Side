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
import { AmountType } from "@/types/types";

const amounts = [
  { amount: "$1" },
  { amount: "$2" },
  { amount: "$5" },
  { amount: "$10" },
  { amount: "All" },
];

export const Amount = ({ amountSelected, handleAmountSelect }: AmountType) => {
  return (
    <div className="mt-7 flex justify-between">
      <p className="font-[500] ">Recent transactions</p>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Amount | {amountSelected} <ChevronDown></ChevronDown>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuGroup>
              {amounts?.map((item, index) => (
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
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
