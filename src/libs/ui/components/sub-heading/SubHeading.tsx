import type {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren
} from "react";
import styles from "./sub-heading.module.css";

export interface SubHeadingProps extends HTMLAttributes<HTMLDivElement> {}

export const SubHeading: FunctionComponent<
  PropsWithChildren<SubHeadingProps>
> = ({ children, ...rest }) => {
  return (
    <h2 className={styles.subHeading} {...rest}>
      {children}
    </h2>
  );
};
