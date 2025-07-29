import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const CardNumbers = ({ control }: { control: any }) => {
  return (
    <FormField
      control={control}
      name="cardNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Enter card number</FormLabel>
          <FormControl>
            <Input placeholder="xxxxxxxxxxxx" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
