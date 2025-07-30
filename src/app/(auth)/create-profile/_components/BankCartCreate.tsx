"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

// import { Form } from "formik";

import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { CardInputsMain } from "@/components/userInfo/bankCardCreate/cardInputMain";

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

export const CreateBankCartForm = () => {
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

  // console.log(formik.setFieldValue);

  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center ">
      <div className="flex gap-6 flex-col w-[510px]">
        <p className="text-2xl font-semibold">
          How would you like to be paid?{" "}
        </p>
        <p className="text-sm text-muted-foreground font-normal">
          Enter location and payment details
        </p>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CardInputsMain control={form.control} />
              <div className="text-right mt-[24px]">
                <Button className="w-1/2">Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
