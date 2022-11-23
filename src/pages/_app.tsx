import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import ThemeSwitch from "../components/theme/switch";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ThemeSwitch />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
