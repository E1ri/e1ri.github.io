import "@/styles/normalize.scss";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header/Header";
import { Cinzel } from "@next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <main className={cinzel.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
