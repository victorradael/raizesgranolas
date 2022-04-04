import { NextComponentType } from "next";
import styles from "./styles.module.css";

const Content: NextComponentType = ({ children, ...prosps }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Content;
