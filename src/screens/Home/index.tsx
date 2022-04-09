import type { NextPage } from "next";
import Head from "next/head";
import Main from "../../components/Main";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import Content from "../../components/Content";
import History from "../../components/History";
import Grid from "../../components/Grid";
import Granola from "../../components/Granola";
import Conditions from "../../components/conditions";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raízes</title>
        <meta name="description" content="Raízes Granolas" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <Header />
      <Main>
        <Content>
          <History />
          <Grid folder="images2" format="jpeg"/>
          <Granola type="tradicional"/>
          <Conditions/>
          <Granola type="salgada"/>
          <Conditions/>
          <Grid folder="images" format="png"/>
        </Content>
      </Main>
    </div>
  );
};

export default Home;
