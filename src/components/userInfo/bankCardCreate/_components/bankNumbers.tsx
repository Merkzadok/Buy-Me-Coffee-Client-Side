import { BankFormType } from "@/app/(auth)/create-profile/_components/BankCartCreate";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

export type Props ={
  control:Control<BankFormType>
}

export const CardNumbers = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="cardNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Enter card number</FormLabel>
          <FormControl>
            <Input placeholder="xxxxxxxxxxxxxxxx" {...field} maxLength={16} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
