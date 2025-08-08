"use client";

import { use, useContext, useEffect, useState } from "react";
import { AccountEarnings } from "./_components/AccountEarnings";
import { Amount } from "./_components/Amount";
import { Transactions } from "./_components/Transactions";
import { UserContext } from "@/provider/currentUserProvider";
import { DonationItemType } from "@/types/DonationType";

const Home = () => {
  const [donations, setDonations] = useState<DonationItemType[]>([]);

  const [amountSelected, setAmountSelected] = useState<string>("");

  const handleAmountSelect = (value: string) => {
    setAmountSelected(value);
  };

  const { userProvider } = useContext(UserContext);

  useEffect(() => {
    const donationAmounts = async () => {
      if (!userProvider.id) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/received/${userProvider.id}`
      );

      const data = await response.json();

      setDonations(data.donations ? data.donations : []);
    };
    donationAmounts();
  }, [userProvider.id]);

  const filteredAmounts = donations.filter((item) => {
    if (!amountSelected) return item;
    return (
      amountSelected === "All" ||
      item.amount.toString() === amountSelected.replace("$", "")
    );
  });

  return (
    <div className=" max-w-[1200px] ">
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
