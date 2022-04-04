import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Main from "../../components/Main";
import Header from "../../components/Header";
import Content from "../../components/Content";
import styles from "./styles.module.css";

const NotFound404: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raízes - 404</title>
        <meta name="description" content="Raízes Granolas" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header subtitle="404 - Página não encontrada" />

      <Main></Main>
    </div>
  );
};

export default NotFound404;
