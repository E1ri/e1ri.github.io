import "@/styles/normalize.scss";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const font = localFont({
  src: [
    { path: "../fonts/chicago-webfont.woff2" },
    { path: "../fonts/chicago-webfont.woff" },
  ],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
