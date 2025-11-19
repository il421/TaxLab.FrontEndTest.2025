import { Fragment, type FunctionComponent } from "react";
import { useCoreStore } from "../../../../stores/use-core-store.ts";
import { toCurrency } from "../../../../libs/utils";
import styles from "./outputs.module.css";
import { useBandsQuery } from "../../../../libs/queries/useBandsQuery.ts";
import { useTaxesCalculationsQuery } from "../../../../libs/queries/useTaxesCalculationsQuery.ts";

export const Outputs: FunctionComponent = () => {
  const { data: bands = [] } = useBandsQuery();
  const { rates } = useCoreStore();
  const { data } = useTaxesCalculationsQuery({ rates, bands });

  if (!rates || !data) {
    return null;
  }

  return (
    <div className={`${styles.container} animate__animated animate__fadeIn`}>
      <div className={styles.grid}>
        <div className={styles.header}>Band Start</div>
        <div className={styles.header}>Band End</div>
        <div className={styles.header}>Tax Rate %</div>
        <div className={styles.header}>Tax Collected</div>

        {data?.breakdown.map((b, i) => (
          <Fragment key={i}>
            <div className={styles.cell}>{toCurrency(b.bandStart)}</div>
            <div className={styles.cell}>
              {b.bandEnd ? toCurrency(b.bandEnd) : "and over"}
            </div>
            <div className={styles.cell}>{(b.taxRate * 100).toFixed(1)}%</div>
            <div className={styles.cell}>{toCurrency(b.taxCollected)}</div>
          </Fragment>
        ))}

        <div className={styles.total}>
          {`Total Tax: ${toCurrency(data?.totalTax)}`}
        </div>
      </div>
    </div>
  );
};
