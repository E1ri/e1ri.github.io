import classNames from "classnames";
import styles from "./styles.module.scss";
import localFont from "@next/font/local";

const headerFont = localFont({ src: "../../fonts/080203-webfont.woff2" });
export const Header: React.FC = () => {
  return (
    <header className={classNames(styles.header, headerFont.className)}>
      <div className={styles.header__logo}>OVERTHERE</div>
    </header>
  );
};
