import type { TaxBand } from "./tax-band.type.ts";

export type CalculateTax = {
  totalTax: number;
  breakdown: (TaxBand & { taxCollected: number })[];
};
