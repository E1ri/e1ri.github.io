import styles from "./styles.module.scss";

interface IBox {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

export const Box: React.FC<IBox> = ({ children, title }) => {
  return (
    <div className={styles.main}>
      {title && title !== "" && (
        <div className={styles.main__title}>{title.toLocaleUpperCase()}</div>
      )}
      {children}
    </div>
  );
};
