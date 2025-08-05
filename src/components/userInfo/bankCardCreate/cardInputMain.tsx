import { BankFormType } from "@/app/(auth)/create-profile/_components/BankCartCreate";
import { CardNumbers } from "./_components/bankNumbers";
import { CardExpiryRow } from "./_components/CardExpiryRow";
import { BankNames } from "./_components/nameLastName";
import { SelectCountry } from "./_components/SelectCountry";
import { Control } from "react-hook-form";

export type Props ={
  control:Control<BankFormType>
}

export const CardInputsMain = ({ control }:Props) => {
  return (
    <div className="flex flex-col gap-6">
      {" "}
      <SelectCountry control={control} />
      <BankNames control={control} />
      <CardNumbers control={control} />
      <CardExpiryRow control={control} />
    </div>
  );
};
