import { clueInfo, nanoGen } from "@/utils/nanogram";
import classNames from "classnames";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { ICluesInfo, INonoElement } from "@/interfaces/nonoArray";

interface INanogram {
  setIsWin: Dispatch<SetStateAction<boolean>>;
  setMistakesCount: Dispatch<SetStateAction<number>>;
  isWin: boolean;
}

export const Nanogram: React.FC<INanogram> = ({
  setIsWin,
  setMistakesCount,
  isWin,
}) => {
  const arrRef = useRef<INonoElement[][]>(nanoGen(10)); // todo: custom number as a prop
  const [nanoArr, setNanoArr] = useState<INonoElement[][] | null>(null);
  const [cluesHoriz, setCluesHoriz] = useState<number[][] | null>(null);
  const [cluesVert, setCluesVert] = useState<number[][] | null>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const onMouseDownHandler = (): void => {
    setIsMouseDown(true);
  };

  const onMouseUpHandler = (): void => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    const { rows, columns } = clueInfo(arrRef.current);
    setNanoArr(arrRef.current);
    setCluesHoriz(rows);
    setCluesVert(columns);
    window.addEventListener("mousedown", onMouseDownHandler);
    window.addEventListener("mouseup", onMouseUpHandler);

    return () => {
      window.removeEventListener("mousedown", onMouseDownHandler);
      window.removeEventListener("mouseup", onMouseUpHandler);
    };
  }, []);

  const changeStatusHandler = (
    indexRow: number,
    elIndex: number,
    el: INonoElement,
    isClick?: boolean
  ) => {
    if (isWin) {
      return;
    }
    if (!isMouseDown && !isClick) {
      return;
    }
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

  const gameOverChecker = (grid: INonoElement[][]) => {
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
          cluesVert.map((el: number[], index) => {
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
        nanoArr.map((el: INonoElement[], indexRow) => {
          return (
            <div className={styles.nano__row} key={indexRow}>
              {cluesHoriz !== null &&
                cluesHoriz[indexRow].map((el: number, index: number) => {
                  return (
                    <div className={styles.nano__clue_cell} key={index}>
                      {el}
                    </div>
                  );
                })}
              {el.map((cell: INonoElement, index: number) => {
                return (
                  <div
                    className={classNames({
                      [styles.nano__cell]: true,
                      [styles.nano__cell_correct]: cell.isPressed,
                    })}
                    onMouseOver={() =>
                      changeStatusHandler(indexRow, index, cell)
                    }
                    onMouseDown={() =>
                      changeStatusHandler(indexRow, index, cell, true)
                    }
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
