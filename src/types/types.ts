export type AmountType = {
  amountSelected: string;
  handleAmountSelect: (value: string) => void;
  donationAmounts: { amount: string }[];
};

export type FilterProps = {
  filteredAmounts: { amount: string }[];
};
