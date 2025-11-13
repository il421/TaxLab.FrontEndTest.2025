import type { FunctionComponent } from "react";
import logo from "../assets/logo.svg";
import styles from "./heade.module.css";
export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <img alt="TaxLab Logo" src={logo} height={60} width={160} />
    </header>
  );
};
