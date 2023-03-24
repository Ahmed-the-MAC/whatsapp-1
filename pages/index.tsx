import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Provider } from "react-redux";
import store, { useAppSelector } from "@/store/store";
import LandingPage from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>testt</main>
        <LandingPage />
      </>
    </Provider>
  );
}
