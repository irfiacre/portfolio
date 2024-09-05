"use client";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Iradukunda | Software Developer</title>
        <meta
          name="description"
          content="Portfolio for Iradukunda Allelua Fiacre"
        />
        <link
          rel="icon"
          href="/assets/svg/mandela.svg"
          style={{ color: "white" }}
        />
      </Head>
      <div className={poppins.className}>
        <Main />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
