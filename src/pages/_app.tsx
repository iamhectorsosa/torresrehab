import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Inter } from "@next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        document.querySelector(".drawer-content")?.scrollTo({ top: 0 });
    }, [router.pathname]);
    return (
        <Layout className={`${inter.variable} font-sans`}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default trpc.withTRPC(App);
