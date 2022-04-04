import type { NextComponentType } from "next/types";
import styles from "./styles.module.css";

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <span>Raízes 2022 © Todos os direitos reservados.</span>
    </footer>
  );
};
export default Footer;
