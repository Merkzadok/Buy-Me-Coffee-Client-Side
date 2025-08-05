import { bankFormSchema } from "@/app/(auth)/create-profile/_components/BankCartCreate";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CardInputsMain } from "@/components/userInfo/bankCardCreate/cardInputMain";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

const bankFormmSchema = bankFormSchema;

export const EditCreditCard = () => {
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

  function onSubmit(values: z.infer<typeof bankFormmSchema>) {
    console.log(values);
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
