import react, { useEffect, useState } from "react";
import Head from "next/head";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import Header from "../components/header";

import Home from "../components/home";
import QuienesSomos from "../components/quienesSomos";
import Personas from "../components/personas";
import Clientes from "../components/clientes";

const Index = () => {
  const [scroll, setScroll] = useState(0);

  const { scrollYProgress } = useViewportScroll();

  const {} = useAnimation();

  // const initial = useTransform(scrollYProgress, (x) => console.log(x));

  // console.log("initial");
  // console.log(initial);

  useEffect(() => {
    //
    onscroll = (event) => {
      // console.log("onscroll");
      // console.log(window.scrollY);
      setScroll(window.scrollY);
    };
  });

  return (
    <>
      <Head>
        <title>PUBLIARTE</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <motion.main style={{ position: "absolute" }}>
        <Header scroll={scroll} />
        <Home scroll={scroll} />
        <QuienesSomos scroll={scroll} />
        <Personas scroll={scroll} />
        <Clientes scroll={scroll} />
      </motion.main>
    </>
  );
};

export default Index;
