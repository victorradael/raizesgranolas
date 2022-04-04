import { NextComponentType } from "next";
import Image from "next/image";
import styles from "./styles.module.css";

const Header = ({ ...props }) => {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" width={600} height={400} alt="Raízes Logo" />
      <h1>{props.subtitle}</h1>
    </header>
  );
};

export default Header;
