import { bankFormSchema } from "@/app/(auth)/create-profile/_components/BankCartCreate";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CardInputsMain } from "@/components/userInfo/bankCardCreate/cardInputMain";
import { UserContext } from "@/provider/currentUserProvider";
import { BankCardInfoType, BankCardInfoWithoutExpiry } from "@/types/bankCardType";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";

const bankFormmSchema = bankFormSchema;

export const EditCreditCard = () => {
    const { userProvider } = useContext(UserContext);
    const [bankCardId, setBankCardId] = useState("")


  const form = useForm<z.infer<typeof bankFormmSchema>>({
    resolver: zodResolver(bankFormmSchema),
    defaultValues: {
         selectCountry: "",
      name: "",
      lastName:"",
      cardNumber: "",
      month:"",
      year: "",
      CVC: "",
    },
  });


   const getBankCard = async() =>{

   const {data} = await axios.get(`http://localhost:4001/bank-cards/get/${userProvider.id}`);

   const bankInfo = data.user as BankCardInfoType;
   const dateObj = new Date(bankInfo.expiryDate);
   const year = dateObj.getFullYear().toString();
  //  console.log("year:", year);
   const month = (dateObj.getMonth()+1).toString().padStart(2, "0");
  //  console.log("month:", month);

  setBankCardId(String(bankInfo.id))

const newBankinitialvalue={
    selectCountry: bankInfo.country,
      name: bankInfo.firstName,
      lastName: bankInfo.lastName,
      cardNumber: bankInfo.cardNumber,
      CVC: String(bankInfo.CVC),
      month:month,
      year:year
   }

form.reset(newBankinitialvalue);
}

useEffect(()=>{ if(userProvider.id) getBankCard()},[userProvider.id]);

async function onSubmit(values: z.infer<typeof bankFormmSchema>) {
    console.log(values);
   await settingsBankUpdate(values.selectCountry, values.name, values.lastName, values.cardNumber, values.CVC, values.month, values.year)
  }

  console.log("bankCardId: ", typeof bankCardId);


  const settingsBankUpdate = async(selectCountry:string, name:string,lastName:string, cardNumber:string, CVC:string, month:string, year:string) =>{
      const expiryDate = `${year}-${month}-01`

    const {data} = await axios.put(`http://localhost:4001/bank-cards/update/${bankCardId}`,{
      country:selectCountry, firstName:name, lastName:lastName, cardNumber:cardNumber, expiryDate :expiryDate,CVC:CVC
    });

    console.log("data", data);
    
  }

  return (
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
  );
};
