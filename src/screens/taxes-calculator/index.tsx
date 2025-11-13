import type { FunctionComponent } from "react";
import { History } from "./components/history/History.tsx";
import styles from "./tax-calculator-screen.module.css";
import { TaxesForm } from "./components/taxes-form/TaxesForm.tsx";
import { SubHeading } from "../../libs/ui/components";
import { Outputs } from "./components/outputs/Outputs.tsx";

export const TaxesCalculatorScreen: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <aside className={styles.wrapper}>
          <SubHeading>Calculate your taxes</SubHeading>
          <TaxesForm />
          <Outputs />
        </aside>
        <aside className={`${styles.wrapper} ${styles.wrapperHistory}`}>
          <SubHeading>History</SubHeading>
          <History />
        </aside>
      </div>
    </section>
  );
};
