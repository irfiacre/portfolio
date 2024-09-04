import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

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
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
