import type { NextPage } from "next";
import logo from "../public/logo.svg";
import slogan from "../public/slogan.svg";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raizes</title>
        <meta name="description" content="Raizes Granolas" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main className={styles.main}>
        <Image src={logo} width={600} height={400} alt="Raizes Logo" />
        <Image src={slogan} width={500} height={200} alt="Raizes Logo" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
