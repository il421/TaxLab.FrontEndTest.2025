import type { FunctionComponent } from "react";
import { useCoreStore } from "../../../../stores/use-core-store.ts";
import styles from "./history.module.css";
import { Button } from "../../../../libs/ui/components";
import { toCurrency } from "../../../../libs/utils/currency.uitls.ts";

export const History: FunctionComponent = () => {
  const { history, restToHistory, setRates, setTempRates } = useCoreStore();

  if (!history.length)
    return <span className={styles.noData}>No history data</span>;
  return (
    <div className={styles.wrapper}>
      <div className={styles.rows}>
        {history.map((item, idx) => (
          <div
            className={`${styles.row} animate__animated animate__fadeIn`}
            key={`${item.date}-${item.rates}=${idx}`}
          >
            <span>{item.date}</span>
            <a
              className={styles.button}
              onClick={event => {
                event.preventDefault();
                event.stopPropagation();
                setRates(item.rates);
                setTempRates("");
              }}
            >
              {toCurrency(item.rates)}
            </a>
          </div>
        ))}
      </div>

      <Button
        onClick={() => {
          restToHistory();
        }}
      >
        Clear
      </Button>
    </div>
  );
};
