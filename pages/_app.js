import Layout from "../components/layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>True And Fair</title>
        <meta name="description" content="Official website of True&Fair" />
        <link rel="icon" href="/homeicon/tnf6.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
