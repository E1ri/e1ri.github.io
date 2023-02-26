import classNames from "classnames";
import styles from "./styles.module.scss";
import { Cinzel } from "@next/font/google";
const cinzel = Cinzel({ subsets: ["latin"] });
export const Header: React.FC = () => {
  return (
    <header className={classNames(styles.header, cinzel.className)}>
      <div className={styles.header__logo}>OVERTHERE</div>
    </header>
  );
};
