import { clueInfo, nanoGen } from "@/utils/nanogram";
import classNames from "classnames";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface INanogram {
  setIsWin: Dispatch<SetStateAction<boolean>>;
  setMistakesCount: Dispatch<SetStateAction<number>>;
}

export const Nanogram: React.FC<INanogram> = ({
  setIsWin,
  setMistakesCount,
}) => {
  const [nanoArr, setNanoArr] = useState<any[][] | null>(null);
  const [cluesHoriz, setCluesHoriz] = useState<number[][] | null>(null);
  const [cluesVert, setCluesVert] = useState<number[][] | null>(null);

  useEffect(() => {
    const arr = nanoGen(10);
    const { rows, columns } = clueInfo(arr);
    setNanoArr(arr);
    setCluesHoriz(rows);
    setCluesVert(columns);
  }, []);

  const changeStatusHandler = (indexRow: number, elIndex: number, el: any) => {
    if (nanoArr === null) {
      return;
    }
    if (el.content === 0) {
      setMistakesCount((prev) => prev + 1);
      return;
    }
    if (el.isPressed === true) {
      return;
    }
    const changed = [...nanoArr];
    changed[indexRow][elIndex].isPressed = true;
    setNanoArr(changed);
    gameOverChecker(changed);
  };

  const gameOverChecker = (grid: any[][]) => {
    for (let x of grid) {
      for (let y of x) {
        if (y.content === 1 && y.isPressed !== true) {
          return;
        }
      }
    }
    setIsWin(true);
  };

  return (
    <div className={styles.nano}>
      <div className={styles.nano__top_row}>
        {cluesVert !== null &&
          cluesVert.map((el, index) => {
            return (
              <div className={styles.nano__clue_row} key={index}>
                {el.map((el, index) => {
                  return (
                    <div key={index} className={styles.nano__clue_cell}>
                      {el}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
      {nanoArr !== null &&
        nanoArr.map((el, indexRow) => {
          return (
            <div className={styles.nano__row} key={indexRow}>
              {cluesHoriz !== null &&
                cluesHoriz[indexRow].map((el, index) => {
                  return (
                    <div className={styles.nano__clue_cell} key={index}>
                      {el}
                    </div>
                  );
                })}
              {el.map((cell, index) => {
                return (
                  <div
                    className={classNames({
                      [styles.nano__cell]: true,
                      [styles.nano__cell_correct]: cell.isPressed,
                    })}
                    onClick={() => changeStatusHandler(indexRow, index, cell)}
                    key={index}
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
};
