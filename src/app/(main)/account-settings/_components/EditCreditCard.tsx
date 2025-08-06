import { bankFormSchema } from "@/app/(auth)/create-profile/_components/BankCartCreate";
import { LoaderCoffee } from "@/components/loading.tsx/loader";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CardInputsMain } from "@/components/userInfo/bankCardCreate/cardInputMain";
import { UserContext } from "@/provider/currentUserProvider";
import { BankCardInfoType } from "@/types/bankCardType";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { error } from "console";
import { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";

const bankFormmSchema = bankFormSchema;

export const EditCreditCard = ({ userId }: { userId: number }) => {
  const [loading, setLoading] = useState(false);
  const [bankCardId, setBankCardId] = useState("");

  const form = useForm<z.infer<typeof bankFormmSchema>>({
    resolver: zodResolver(bankFormmSchema),
    defaultValues: {
      selectCountry: "",
      name: "",
      lastName: "",
      cardNumber: "",
      month: "",
      year: "",
      CVC: "",
    },
  });

  const getBankCard = async () => {
    setLoading(true);
    axios
      .get(`http://localhost:4001/bank-cards/get/${userId}`)
      .then((response) => {
        const bankInfo = response.data.user as BankCardInfoType;

        const dateObj = new Date(bankInfo.expiryDate);
        const year = dateObj.getFullYear().toString();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");

        setBankCardId(String(bankInfo.id));

        const newBankInitialValue = {
          selectCountry: bankInfo.country,
          name: bankInfo.firstName,
          lastName: bankInfo.lastName,
          cardNumber: bankInfo.cardNumber,
          CVC: String(bankInfo.CVC),
          month: month,
          year: year,
        };

        form.reset(newBankInitialValue);
      })
      .catch((error) => {
        console.log("Алдаа гарлаа:", error);
      })
      .finally(() => {
        setLoading(false);
        console.log("getBankCard дууслаа.");
      });
  };

  useEffect(() => {
    if (userId) getBankCard();
  }, [userId]);

  async function onSubmit(values: z.infer<typeof bankFormmSchema>) {
    console.log(values);
    await settingsBankUpdate(
      values.selectCountry,
      values.name,
      values.lastName,
      values.cardNumber,
      values.CVC,
      values.month,
      values.year
    );
  }

  console.log("bankCardId: ", typeof bankCardId);

  const settingsBankUpdate = async (
    selectCountry: string,
    name: string,
    lastName: string,
    cardNumber: string,
    CVC: string,
    month: string,
    year: string
  ) => {
    const expiryDate = `${year}-${month}-01`;

    // const { data } = await axios.put(
    //   `http://localhost:4001/bank-cards/update/${bankCardId}`,
    // {
    //   country: selectCountry,
    //   firstName: name,
    //   lastName: lastName,
    //   cardNumber: cardNumber,
    //   expiryDate: expiryDate,
    //   CVC: CVC,
    // }
    // );
    setLoading(true);
    axios
      .put(`http://localhost:4001/bank-cards/update/${bankCardId}`, {
        country: selectCountry,
        firstName: name,
        lastName: lastName,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        CVC: CVC,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });


  };

  return (
    <div>
      {loading && <LoaderCoffee />}
      <div className="p-6 border-1 rounded-lg border-zinc-200">
        <p className="text-base font-bold pb-6">Payment details</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardInputsMain control={form.control} />
            <div className="text-right mt-[24px]">
              <Button className="w-full">Save changes</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
