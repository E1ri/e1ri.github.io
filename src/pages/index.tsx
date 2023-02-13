import { DevPlaceholder } from "@/components/DevPlaceholder/DevPlaceholder";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>e1ri</title>
        <meta name="description" content="e1ri's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DevPlaceholder />
      </div>
    </>
  );
};

export default Home;
