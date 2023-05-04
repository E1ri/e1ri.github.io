import classNames from "classnames";
import styles from "./styles.module.scss";
import localFont from "@next/font/local";
import { Canvas } from "@react-three/fiber";
import { TelegramThree } from "../TelegramThree/TelegramThree";
import Link from "next/link";

const headerFont = localFont({ src: "../../fonts/080203-webfont.woff2" });
export const Header: React.FC = () => {
  return (
    <header className={classNames(styles.header, headerFont.className)}>
      <div className={styles.header__logo}>deadpanorama</div>
      <Link aria-label="Telegram" href="https://t.me/deadpanorama">
        <Canvas
          camera={{ position: [5, 0, 0] }}
          className={styles.header__cnvs}
        >
          <TelegramThree />
        </Canvas>
      </Link>
    </header>
  );
};
