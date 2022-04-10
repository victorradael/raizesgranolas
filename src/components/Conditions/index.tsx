import { NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";
import CaneMolasses from "../Icons/CaneMolasses";
import Handcrafted from "../Icons/Handcrafted";
import NoPreservatives from "../Icons/NoPreservatives";
import NoTransFat from "../Icons/NoTransFat";
import Vegan from "../Icons/Vegan";
import styles from "./styles.module.css";

const Conditions: NextComponentType = () => {
  const [info, setInfo] = useState("");

  return (
    <>
      <div className={styles.conditions}>
        <Handcrafted
          size="4rem"
          onMouseEnter={() => setInfo("Produzido Artesanalmente")}
          onMouseLeave={() => setInfo("")}
        />
        <Vegan
          size="4rem"
          onMouseEnter={() => setInfo("Vegano")}
          onMouseLeave={() => setInfo("")}
        />
        <CaneMolasses
          size="4rem"
          onMouseEnter={() => setInfo("Adoçado com melado de cana")}
          onMouseLeave={() => setInfo("")}
        />

        <NoPreservatives
          size="4rem"
          onMouseEnter={() => setInfo("Sem conservantes")}
          onMouseLeave={() => setInfo("")}
        />

        <NoTransFat
          size="4rem"
          onMouseEnter={() => setInfo("Sem gordura trans")}
          onMouseLeave={() => setInfo("")}
        />
      </div>
      <span className={styles.span}>{info}</span>
    </>
  );
};

export default Conditions;
