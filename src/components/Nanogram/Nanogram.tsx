import { clueInfo, nanoGen } from "@/utils/nanogram";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Nanogram = () => {
  const [nanoArr, setNanoArr] = useState<number[][] | null>(null);
  const [clues, setClues] = useState<number[][] | null>(null);
  useEffect(() => {
    const arr = nanoGen(10);
    setNanoArr(arr);
    setClues(clueInfo(arr));
    console.log(clueInfo(arr));
  }, []);

  return (
    <div className={styles.nano}>
      {nanoArr !== null &&
        nanoArr.map((el, indexRow) => {
          return (
            <div className={styles.nano__row} key={indexRow}>
              {clues !== null &&
                clues[indexRow].map((el, index) => {
                  return <div key={index}>{el}</div>;
                })}
              {el.map((cell, index) => {
                return (
                  <div className={styles.nano__cell} key={index}>
                    {cell}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};
