import Title from "../Title";
import styles from "./styles.module.css";

const Header = ({ ...props }) => {
  return (
    <header className={styles.header}>
      <Title />
      <h1>{props.subtitle}</h1>
    </header>
  );
};

export default Header;
