import styles from "./styles.module.scss";

export const DevPlaceholder = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.code}>00</h1>
      <div className={styles.container}>
        <h2 className={styles.text}>UNDER CONSTRUCTION</h2>
        <div className={styles.cursor} />
      </div>
    </div>
  );
};
