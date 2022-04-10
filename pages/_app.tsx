import "../styles/globals.css";
import "../styles/theme.css";
import type { AppProps } from "next/app";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
