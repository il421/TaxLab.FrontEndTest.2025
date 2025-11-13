export const toCurrency = (amount: number) =>
  amount.toLocaleString("en-NZ", {
    style: "currency",
    currency: "NZD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
