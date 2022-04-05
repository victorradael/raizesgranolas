
import Image from "next/image";
import styles from "./styles.module.css"

const Granola = ({ ...props}) => {
  if(props.type === "tradicional"){
    return (
      <div className={styles.container}>
      
        <Image width={600} height={200} src="/granolatradicional.svg" alt="Granola Tradicional" />
        <h2 className={styles.subtitle}>ingredientes</h2>
        <p className={styles.text}>amêndoas + aveia em flocos + castanha de caju + coco em lascas + extrato de baunilha + flor de sal + melado de cana + óleo de coco + semente de abóbora.</p>
      </div>
    )
  }

  if(props.type === "salgada"){
    return (
      <div className={styles.container}>
      <Image width={600} height={200} src="/granolasalgada.svg" alt="Granola Salgada" />
      <h2 className={styles.subtitle}>ingredientes</h2>
        <p className={styles.text}>
        amêndoas + aveia em flocos + azeite extra virgem + castanha de caju + castanha do Pará + chimichurri + flor de sal + gergelim + melado de cana + páprica picante + semente de abóbora.
        </p>
      </div>
    )
  }

  return <></>

}
export default Granola;