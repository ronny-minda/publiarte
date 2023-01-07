import react, { useEffect, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../components/header";
import Home from "../components/home";
import QuienesSomos from "../components/quienesSomos";
import Personas from "../components/personas";
import Clientes from "../components/clientes";
import Footer from "../components/footer";
import AnimacionLogo from "../svg/animacionLogo";
import Portafolio from "../components/porafolio";
import Contacto from "../components/contacto";

const Index = () => {
  const [valor, setValor] = useState(true);

  return (
    <>
      <Head>
        <title>Publiarte</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png"></link>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
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
        <Header />
        <Home />
        <QuienesSomos />
        <Personas />
        <Clientes />
        <Portafolio />
        <Contacto />
        <Footer />

        <a
          className="whatsApp"
          href="https://api.whatsapp.com/send?phone=593993105654&text=Hola, Nececito mas informacion!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="logo"></div>
        </a>

        {false && (
          <div className="animacionLogo">
            <AnimacionLogo />
          </div>
        )}
      </motion.main>
    </>
  );
};

export default Index;
