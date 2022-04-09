import { NextComponentType } from "next";
import Image from "next/image";
import styles from './styles.module.css'

const Conditions: NextComponentType = () => {
  return (
    <div className={styles.conditions}>
      <Image height={100} width={100} src="/icons/1.svg" alt="Imagem 1" />
      <Image height={100} width={100} src="/icons/2.svg" alt="Imagem 2" />
      <Image height={100} width={100} src="/icons/3.svg" alt="Imagem 3" />
      <Image height={100} width={100} src="/icons/4.svg" alt="Imagem 4" />
      <Image height={100} width={100} src="/icons/5.svg" alt="Imagem 5" />
    </div>
  )
} 

export default Conditions;