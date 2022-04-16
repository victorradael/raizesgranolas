import Image from "next/image";
import WhatsappButton from "../WhatsappButton";
import Conditions from "../Conditions";
import styles from "./styles.module.css";
import TradicionalGranola from "../TradicionalGranola";
import SaltGranola from "../SaltGranola";

const Granola = ({ ...props }) => {
  if (props.type === "tradicional") {
    return (
      <div className={styles.container}>
        <TradicionalGranola />
        <h2 className={styles.subtitle}>INGREDIENTES</h2>
        <p className={styles.text}>
          amêndoas <b>+</b> aveia em flocos <b>+</b> castanha de caju <b>+</b>{" "}
          coco em lascas <b>+</b> extrato de baunilha <b>+</b> flor de sal{" "}
          <b>+</b> melado de cana <b>+</b> óleo de coco <b>+</b> semente de{" "}
          abóbora.
        </p>
        <Conditions />
        <WhatsappButton
          text="Olá, gostaria de fazer minha encomenda de granola Raízes Tradicional!"
          label="Compre já a sua!"
        />
      </div>
    );
  }

  if (props.type === "salgada") {
    return (
      <div className={styles.container}>
        <SaltGranola />
        <h2 className={styles.subtitle}>INGREDIENTES</h2>
        <p className={styles.text}>
          amêndoas <b>+</b> aveia em flocos <b>+</b> azeite extra virgem{" "}
          <b>+</b> castanha de caju <b>+</b> castanha do Pará <b>+</b>{" "}
          chimichurri <b>+</b> flor de sal <b>+</b> gergelim <b>+</b> melado de{" "}
          cana <b>+</b> páprica picante <b>+</b> semente de abóbora.
        </p>
        <Conditions />
        <WhatsappButton
          text="Olá, gostaria de fazer minha encomenda de granola Raízes Salgada!"
          label="Compre já a sua!"
        />
      </div>
    );
  }

  return <></>;
};
export default Granola;
