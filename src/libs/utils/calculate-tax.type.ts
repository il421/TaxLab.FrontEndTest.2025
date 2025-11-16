import type { TaxBand } from "../dtos/tax-band.type.ts";

export type CalculateTax = {
  totalTax: number;
  breakdown: (TaxBand & { taxCollected: number })[];
};
