import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Market Hub</title>
        <meta
          name="OpenMarketHub"
          content="MarketHub for selling goods and products"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1>Open Market Hub</h1>
      </main>
      <Footer />
    </>
  );
}
