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
      </Head>
      <div className={styles.main}>
        <div className={styles.main__container}>
          <div className={styles.main__counter}>mistakes: {mistakesCount}</div>
          {isWin && <div className={styles.main__message}>WIN!!!</div>}
        </div>
        <Nanogram
          setMistakesCount={setMistakesCount}
          isWin={isWin}
          setIsWin={setIsWin}
        />
      </div>
    </>
  );
};

export default Home;
