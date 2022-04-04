import type { NextComponentType } from "next/types";
import styles from "./styles.module.css";

const Main: NextComponentType = ({ children, ...props }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
