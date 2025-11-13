import type {
  ButtonHTMLAttributes,
  FunctionComponent,
  PropsWithChildren
} from "react";
import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<unknown> {
  variant?: "primary" | "secondary";
}

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  variant = "primary",
  ...restButtonAttr
}) => {
  return (
    <button
      className={
        variant === "primary"
          ? styles.button
          : `${styles.button} ${styles.secondary}`
      }
      {...restButtonAttr}
      aria-disabled={restButtonAttr.disabled}
    >
      {children}
    </button>
  );
};
