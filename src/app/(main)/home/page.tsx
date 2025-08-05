"use client";

import { useState } from "react";
import { AccountEarnings } from "./_components/AccountEarnings";
import { Amount } from "./_components/Amount";
import { Transactions } from "./_components/Transactions";
import { AmountType } from "@/types/types";

const donationAmounts = [
  { amount: "$1" },
  { amount: "$2" },
  { amount: "$5" },
  { amount: "$10" },
];

const Home = () => {
  const [amountSelected, setAmountSelected] = useState<string>("");
  const handleAmountSelect = (value: string) => {
    setAmountSelected(value);
  };
  const filteredAmounts = donationAmounts.filter(
    (item) => item.amount !== amountSelected
  );
  console.log(filteredAmounts);
  return (
    <div className="mx-60">
      <AccountEarnings />
      <Amount
        donationAmounts={donationAmounts}
        amountSelected={amountSelected}
        handleAmountSelect={handleAmountSelect}
      />
      <Transactions filteredAmounts={filteredAmounts} />
    </div>
  );
};
export default Home;
