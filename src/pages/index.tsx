import { Nanogram } from "@/components/Nanogram/Nanogram";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/index.module.scss";

const Home = () => {
  const [isWin, setIsWin] = useState<boolean>(false);
  const [mistakesCount, setMistakesCount] = useState<number>(0);
  return (
    <>
      <Head>
        <title>E1RI</title>
        <meta name="description" content="e1ri's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.main__text}>Mistakes: {mistakesCount}</div>
        {isWin && <div className={styles.main__text}>WINWINWIN</div>}
        <Nanogram setMistakesCount={setMistakesCount} setIsWin={setIsWin} />
      </div>
    </>
  );
};

export default Home;
