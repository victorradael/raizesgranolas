import styles from "./styles.module.css";

const NoPreservatives = ({ ...props }): JSX.Element => {
  return (
    <div {...props}>
      <svg
        width={props.size}
        height={props.size}
        className={styles.image}
        viewBox={`0 0 300 300`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M150 0C232.887 0 300 67.1134 300 150C300 232.887 232.887 300 150 300C67.1134 300 0 232.887 0 150C0 67.1134 67.1134 0 150 0ZM50.4124 233.814L93.7113 190.515L91.2371 195.464V195.773C82.268 214.33 77.6289 223.918 83.1959 231.031C83.8144 231.649 84.1237 232.268 84.7423 232.577L67.1134 250.206C89.6907 268.763 118.763 280.206 150 280.206C222.062 280.206 280.206 221.753 280.206 150C280.206 118.454 269.072 89.6907 250.206 67.1134L180.928 136.701C179.072 131.753 178.144 127.113 178.144 122.165V106.082L233.814 50.4124C211.237 31.5464 181.856 20.1031 150 20.1031C78.2474 20.1031 20.1031 78.2474 20.1031 150C20.1031 181.856 31.5464 210.928 50.4124 233.814Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M127.424 210.624C121.548 197.944 140.723 194.232 143.197 204.438C146.29 215.882 131.135 218.974 127.424 210.624ZM151.857 200.108C150.001 185.263 172.579 183.407 173.506 197.634C174.434 211.552 153.403 212.789 151.857 200.108ZM134.228 184.026C132.991 173.201 147.218 172.583 148.764 181.552C150.62 192.377 135.156 192.377 134.228 184.026ZM124.022 70.2116C124.64 81.3456 128.042 70.5208 128.042 87.2219C128.042 144.748 131.754 123.098 107.63 176.294C78.8672 239.387 70.8259 230.418 150.001 230.418C222.991 230.418 220.207 235.675 202.579 198.253C197.012 186.191 191.445 173.201 185.568 161.758C177.527 145.675 171.651 135.779 171.96 122.17L171.651 81.6549C172.888 70.5208 175.053 82.2734 175.981 70.5208C170.104 68.0466 134.228 69.593 124.022 70.2116Z"
        />
      </svg>
    </div>
  );
};

export default NoPreservatives;