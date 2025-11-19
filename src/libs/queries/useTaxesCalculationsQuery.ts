import type { TaxBand } from "../dtos/tax-band.type.ts";
import { calculateTax } from "../utils";
import type { CalculateTax } from "../dtos/calculate-tax.type.ts";
import { useQuery } from "@tanstack/react-query";
import { QueriesKeys } from "./queries-keys.enum.ts";

export const useTaxesCalculationsQuery = (args: {
  rates: number;
  bands: TaxBand[];
}) => {
  return useQuery<CalculateTax, Error>({
    queryFn: () => {
      return Promise.resolve(calculateTax(args.rates, args.bands));
    },
    queryKey: [QueriesKeys.Taxes, args.rates]
  });
};
