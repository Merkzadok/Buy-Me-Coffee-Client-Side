export type AmountType = {
  amountSelected: string;
  handleAmountSelect: (value: string) => void;
  amount: string;
  donations: { amount: string }[];
};

export type FilterProps = {
  filteredAmounts: { amount: string }[];
};
