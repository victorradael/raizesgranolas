import type { NextComponentType } from "next/types";
import Image from "next/image";
import styles from "./styles.module.css";

const Grid = ({...props}) => {
  return (
    <div className={styles.grid}>
      <Image height={200} width={200} src={`/${props.folder}/1.${props.format}`} alt="Imagem 1" />
      <Image height={200} width={200} src={`/${props.folder}/2.${props.format}`} alt="Imagem 2"/>
      <Image height={200} width={200} src={`/${props.folder}/3.${props.format}`} alt="Imagem 3"/>
      <Image height={200} width={200} src={`/${props.folder}/4.${props.format}`} alt="Imagem 4"/>
      <Image height={200} width={200} src={`/${props.folder}/5.${props.format}`} alt="Imagem 5"/>
      <Image height={200} width={200} src={`/${props.folder}/6.${props.format}`} alt="Imagem 6"/>
      <Image height={200} width={200} src={`/${props.folder}/7.${props.format}`} alt="Imagem 7"/>
      <Image height={200} width={200} src={`/${props.folder}/8.${props.format}`} alt="Imagem 8"/>
      <Image height={200} width={200} src={`/${props.folder}/9.${props.format}`} alt="Imagem 9"/>
    </div>
  );
};

export default Grid;
