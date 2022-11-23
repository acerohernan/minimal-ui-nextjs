import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import ThemeSwitch from "../components/theme/switch";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress
        options={{ showSpinner: false }}
        color="#a21caf"
        height={2}
      />
      <ThemeSwitch />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
