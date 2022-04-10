import { NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";
import Vegan from "../Icons/Vegan";
import styles from "./styles.module.css";

const Conditions: NextComponentType = () => {
  const [info, setInfo] = useState("");

  return (
    <>
      <div className={styles.conditions}>
        <Image
          className={styles.image}
          height={70}
          width={70}
          src="/icons/1.svg"
          alt="Imagem 1"
          onMouseEnter={() => setInfo("Produzido Artesanalmente")}
          onMouseLeave={() => setInfo("")}
        />
        <Vegan
          size="4rem"
          onMouseEnter={() => setInfo("Produzido Artesanalmente")}
          onMouseLeave={() => setInfo("")}
        />

        <Image
          className={styles.image}
          height={70}
          width={70}
          src="/icons/2.svg"
          alt="Imagem 2"
          onMouseEnter={() => setInfo("Vegano")}
          onMouseLeave={() => setInfo("")}
        />

        <Image
          className={styles.image}
          height={70}
          width={70}
          src="/icons/3.svg"
          alt="Imagem 3"
          onMouseEnter={() => setInfo("Adoçado com melado de cana")}
          onMouseLeave={() => setInfo("")}
        />

        <Image
          className={styles.image}
          height={70}
          width={70}
          src="/icons/4.svg"
          alt="Imagem 4"
          onMouseEnter={() => setInfo("Sem conservantes")}
          onMouseLeave={() => setInfo("")}
        />

        <Image
          className={styles.image}
          itemType="svg"
          height={70}
          width={70}
          src="/icons/5.svg"
          alt="Imagem 5"
          onMouseEnter={() => setInfo("Sem gordura trans")}
          onMouseLeave={() => setInfo("")}
        />
      </div>
      <span className={styles.span}>{info}</span>
    </>
  );
};

export default Conditions;
