import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

export const ExpiresMonth = ({ control }: { control: any }) => {
  return (
    // <div className="w-1/3">
    <FormField
      control={control}
      name="month"
      render={({ field }) => (
        <FormItem className="">
          <FormLabel>Expires</FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="MM" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="01">January</SelectItem>
              <SelectItem value="02">February</SelectItem>
              <SelectItem value="03">March</SelectItem>
              <SelectItem value="04">April</SelectItem>
              <SelectItem value="05">May</SelectItem>
              <SelectItem value="06">June</SelectItem>
              <SelectItem value="07">July</SelectItem>
              <SelectItem value="08">August</SelectItem>
              <SelectItem value="09">September</SelectItem>
              <SelectItem value="10">October</SelectItem>
              <SelectItem value="11">November</SelectItem>
              <SelectItem value="12">December</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
