import { type FunctionComponent, useCallback, useMemo } from "react";
import { Button, TextField } from "../../../../libs/ui/components";
import { useCoreStore } from "../../../../stores/use-core-store.ts";
import styles from "./taxes-form.module.css";

export const TaxesForm: FunctionComponent = () => {
  const { setRates, addToHistory, rates, tempRates, setTempRates, resetRates } =
    useCoreStore();

  const calculateButtonDisable = useMemo(() => {
    return Number(tempRates) === rates || !tempRates;
  }, [tempRates, rates]);

  const resetButtonDisable = useMemo(() => {
    return !tempRates && !rates;
  }, [tempRates, rates]);

  const onCalculate = useCallback(() => {
    {
      if (tempRates) {
        const numValue = Number(tempRates);
        setRates(numValue);
        addToHistory({
          rates: numValue,
          date: new Date().toDateString()
        });
      }
    }
  }, [tempRates]);

  const onReset = () => {
    resetRates(0);
    setTempRates("");
  };

  return (
    <div className={styles.wrapper}>
      <TextField
        type="number"
        value={tempRates}
        placeholder="NZD"
        onChange={event => {
          event.preventDefault();
          const value = event.target.value;

          if (!!value && isNaN(Number(value))) return;
          setTempRates(event.target.value);
        }}
      />
      <Button onClick={onCalculate} disabled={calculateButtonDisable}>
        Calculate
      </Button>
      <Button
        onClick={onReset}
        disabled={resetButtonDisable}
        variant="secondary"
      >
        X
      </Button>
    </div>
  );
};
