import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../src/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Teste NextJs</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
