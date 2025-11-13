import styles from "./text-field.module.css";
import type { FunctionComponent, InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  ...rest
}) => {
  return (
    <label className={`${styles.wrapper} ${styles.label}`}>
      <input className={styles.input} {...rest} />
    </label>
  );
};
