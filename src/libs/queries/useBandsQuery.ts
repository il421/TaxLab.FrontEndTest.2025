import { useQuery } from "@tanstack/react-query";
import { QueriesKeys } from "./queries-keys.enum.ts";
import type { TaxBand } from "../dtos/tax-band.type.ts";
import { nzTaxBands } from "../dtos/nz-tax-bands.constants.ts";

export const useBandsQuery = () => {
  return useQuery<TaxBand[], Error>({
    queryKey: [QueriesKeys.Bands],
    queryFn: () => {
      return Promise.resolve(nzTaxBands);
    }
  });
};
