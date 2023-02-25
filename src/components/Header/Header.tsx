import classNames from "classnames";
import styles from "./styles.module.scss";

interface IHeader {
  className?: string;
}

export const Header: React.FC<IHeader> = ({ className }) => {
  return (
    <header
      className={classNames({ [styles.header]: true }, className && className)}
    >
      <div className={styles.header__logo}>0</div>
      <div className={styles.header__title}>E1RI</div>
    </header>
  );
};
