import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Zilla_Slab } from "next/font/google";
import { trpc } from "../utils/trpc";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-zilla",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={`${inter.variable} ${zilla.variable} font-sans`}>
    <>
      <style jsx global>{`
        :root {
          --font-zilla: ${zilla.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
    // </main>
  );
}

export default trpc.withTRPC(App);
