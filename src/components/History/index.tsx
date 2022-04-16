import { NextComponentType } from "next";
import styles from "./styles.module.css";
const History: NextComponentType = () => {
  return (
    <article className={styles.container}>
      <p className={styles.border_right}>
        Em 2019 surgiu a Nativa Natural, uma casa de açaí e smoothie bowls 100%
        naturais, que precisava de uma granola especial para ser servida como
        acompanhamento.
      </p>
      <p className={styles.history}>
        Um ano depois, foram criadas as granolas Raízes, feitas com ingredientes
        selecionados e um sabor sem igual!
      </p>
      <p className={styles.border_left}>
        Sua aprovação foi tão grande que deixou de ser apenas a granola da casa
        e hoje está disponível para todo o Brasil.
      </p>
    </article>
  );
};

export default History;
