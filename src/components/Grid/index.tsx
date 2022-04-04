import type { NextComponentType } from "next/types";
import Image from "next/image";
import styles from "./styles.module.css";

const Grid: NextComponentType = () => {
  return (
    <div className={styles.grid}>
      <Image height={200} width={200} src="/images/1.png" alt="Imagem 1" />
      <Image height={200} width={200} src="/images/2.png" alt="Imagem 2" />
      <Image height={200} width={200} src="/images/3.png" alt="Imagem 3" />
      <Image height={200} width={200} src="/images/4.png" alt="Imagem 4" />
      <Image height={200} width={200} src="/images/5.png" alt="Imagem 5" />
      <Image height={200} width={200} src="/images/6.png" alt="Imagem 6" />
      <Image height={200} width={200} src="/images/7.png" alt="Imagem 7" />
      <Image height={200} width={200} src="/images/8.png" alt="Imagem 8" />
      <Image height={200} width={200} src="/images/9.png" alt="Imagem 9" />
    </div>
  );
};

export default Grid;
