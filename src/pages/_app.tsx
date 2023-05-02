import "@/styles/normalize.scss";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header/Header";
import { Public_Sans } from "@next/font/google";

const pSans = Public_Sans({ subsets: ["latin"] });
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <main className={pSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
