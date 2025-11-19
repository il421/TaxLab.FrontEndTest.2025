import type { TaxBand } from "../dtos/tax-band.type.ts";
import type { CalculateTax } from "../dtos/calculate-tax.type.ts";

/**
 * Calculates total tax for a given salary and tax bands.
 * @param {number} rates - The annual salary.
 * @param {Array} bands - The tax bands.
 */
export const calculateTax = (
  rates: number,
  bands?: TaxBand[]
): CalculateTax => {
  let totalTax = 0;
  const breakdown = [];
  const _bands = bands ?? [];
  for (const band of _bands) {
    const bandStart = band.bandStart;
    const bandEnd = band.bandEnd ?? rates;
    const taxableAmount = Math.max(0, Math.min(rates, bandEnd) - bandStart);

    if (taxableAmount > 0) {
      const taxCollected = taxableAmount * band.taxRate;
      totalTax += taxCollected;

      breakdown.push({
        bandStart,
        bandEnd,
        taxRate: band.taxRate,
        taxCollected
      });
    }

    if (rates <= bandEnd) break;
  }

  return {
    totalTax,
    breakdown
  };
};
