import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const SelectCountry = ({ control }: { control: any }) => {
  return (
    <FormField
      control={control}
      name="selectCountry"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select country</FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="01">Mongolia</SelectItem>
              <SelectItem value="02">Unites Status</SelectItem>
              <SelectItem value="03">Japan</SelectItem>
              <SelectItem value="04">China</SelectItem>
              <SelectItem value="05">German</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
