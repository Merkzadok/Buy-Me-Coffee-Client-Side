import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CardInputsMain } from "@/components/userInfo/bankCardCreate/cardInputMain";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";

const bankFormSchema = z.object({
  selectCountry: z.string().min(2, { message: "Please select a country" }),
  name: z.string().min(2, { message: "First name must match" }),
  lastName: z.string().min(2, { message: "Last name must match" }),
  cardNumber: z.string().min(16, { message: "Card number is invalid" }),
  month: z.string().min(1, { message: "Select a month" }),
  year: z.string().min(4, { message: "Year is required" }),
  CVC: z
    .string()
    .min(3, { message: "CVC must be at least 3 digits" })
    .max(4, { message: "CVC must be 4 digits or less" }),
});

export const EditCreditCard = () => {
  const { push } = useRouter();

  const form = useForm<z.infer<typeof bankFormSchema>>({
    resolver: zodResolver(bankFormSchema),
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

  function onSubmit(values: z.infer<typeof bankFormSchema>) {
    push("/home");
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
