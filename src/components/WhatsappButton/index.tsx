import styles from "./styles.module.css";

const WhatsAppButton = ({ ...props }) => {
  return (
    <a
      className={styles.button}
      href={`https://api.whatsapp.com/send/?phone=5531984023804&text=${props.text}&app_absent=0`}
      target="_blank"
      rel="noreferrer"
    >
      <div>{props.label}</div>
    </a>
  );
};

export default WhatsAppButton;
