import { CardNumbers } from "./_components/bankNumbers";
import { CardExpiryRow } from "./_components/CardExpiryRow";
import { BankNames } from "./_components/nameLastName";
import { SelectCountry } from "./_components/SelectCountry";

export const CardInputsMain = ({ control }: { control: any }) => {
  return (
    <div className="flex flex-col gap-6">
      {" "}
      <SelectCountry control={control} />
      <BankNames control={control} />
      <CardNumbers control={control} />
      {/* <ExpiresMonth control={form.control} /> */}
      <CardExpiryRow control={control} />
    </div>
  );
};
