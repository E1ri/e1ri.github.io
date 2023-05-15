import { Nanogram } from "@/components/Nanogram/Nanogram";
import Head from "next/head";
import { Suspense, useState } from "react";
import styles from "../styles/index.module.scss";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { ComputerThree } from "@/components/ComputerThree/ComputerThree";
import { Loader } from "@/components/Loader/Loader";

const Home = () => {
  const [isWin, setIsWin] = useState<boolean>(false);
  const [mistakesCount, setMistakesCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>E1RI</title>
        <meta name="description" content="e1ri's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.main}>
        <div className={styles.main__top}>
          <div className={styles.main__top_container}>
            {!isLoading ? null : <Loader />}
            <Canvas camera={{ position: [0, 1, 7] }} shadows>
              <Suspense fallback={<>loading</>}>
                <ComputerThree setStart={setIsLoading} />
              </Suspense>
            </Canvas>
          </div>
          <div className={styles.main__top_description}>
            Wlcme!
            <br />
            This is Deadpanorama. I am an experienced web developer and this is
            my website
            <br />
            <b>
              scroll down there`s a game called{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Nonogram"
                target="_blank"
              >
                nonogram
              </Link>
            </b>
          </div>
        </div>
        <div className={styles.main__bottom}>
          <Nanogram
            setMistakesCount={setMistakesCount}
            isWin={isWin}
            setIsWin={setIsWin}
          />
          <div className={styles.main__bottom_container}>
            <div className={styles.main__bottom_counter}>
              {!isWin ? (
                <>Mistakes: {mistakesCount}</>
              ) : (
                <>Win! Total mistakes: {mistakesCount}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
