import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Inter, Zilla_Slab } from "@next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  useEffect(() => {
    document.querySelector(".drawer-content")?.scrollTo({ top: 0 });
  }, [router.pathname]);
  return (
    <Layout className={`${inter.variable} ${zilla.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default trpc.withTRPC(App);
