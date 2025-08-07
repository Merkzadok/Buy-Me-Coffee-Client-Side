import { DonationItemType } from "./DonationType";

export type AmountType = {
  amountSelected: string;
  handleAmountSelect: (value: string) => void;
  amount: string;
  donations: DonationItemType[];
};

export type FilterProps = {
  filteredAmounts: DonationItemType[];
  specialMesssage?: string;
};
