"use client";

import { useEffect, useState } from "react";
import { AccountEarnings } from "./_components/AccountEarnings";
import { Amount } from "./_components/Amount";
import { Transactions } from "./_components/Transactions";
import { AmountType } from "@/types/types";

const Home = () => {
  const [donations, setDonations] = useState<AmountType[]>([]);
  const [amountSelected, setAmountSelected] = useState<string>("");
  const handleAmountSelect = (value: string) => {
    setAmountSelected(value);
  };
  useEffect(() => {
    const donationAmounts = async () => {
      const response = await fetch(
        "http://localhost:4001/donation/search-donations/20"
      );
      const data = await response.json();

      setDonations(data.donations);
    };
    donationAmounts();
  }, []);

  const filteredAmounts = donations.filter(
    (item) => String(item.amount) === amountSelected
  );

  return (
    <div className=" max-w-[1200px]">
      <AccountEarnings />
      <Amount
        amount={amountSelected}
        donations={donations}
        amountSelected={amountSelected}
        handleAmountSelect={handleAmountSelect}
      />
      <Transactions filteredAmounts={filteredAmounts} />
    </div>
  );
};
export default Home;
