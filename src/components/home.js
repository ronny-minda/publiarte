import react, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Web from "./web";
import Diseno from "./diseno";
import Fotos from "./fotos";
import Flecha from "../svg/flecha";

const Home = () => {
  const [carrusel, setCarrusel] = useState({
    fotos: true,
    diseno: false,
    web: false,
  });

  const [orien, setOrien] = useState(true);

  const adelante = () => {
    setOrien(true);
    console.log("adelante");

    // fotos => diseno
    // diseno => web
    // web => fotos

    if (carrusel.fotos === true) {
      setCarrusel({
        ...carrusel,
        fotos: false,
        diseno: true,
        web: false,
      });
    }
    if (carrusel.diseno === true) {
      setCarrusel({
        ...carrusel,
        fotos: false,
        diseno: false,
        web: true,
      });
    }
    if (carrusel.web === true) {
      setCarrusel({
        ...carrusel,
        fotos: true,
        diseno: false,
        web: false,
      });
    }
  };

  const atras = () => {
    setOrien(false);
    console.log("atras");

    // fotos <= diseno
    // diseno <= web
    // web <= fotos

    if (carrusel.fotos === true) {
      setCarrusel({
        ...carrusel,
        fotos: false,
        diseno: false,
        web: true,
      });
    }
    if (carrusel.diseno === true) {
      setCarrusel({
        ...carrusel,
        fotos: true,
        diseno: false,
        web: false,
      });
    }
    if (carrusel.web === true) {
      setCarrusel({
        ...carrusel,
        fotos: false,
        diseno: true,
        web: false,
      });
    }
  };

  return (
    <>
      <section className="home">
        {/* <div className="flechaIsqui" onClick={() => atras()}>
          <Flecha
            style={{
              transform: "rotateY(180deg)",
            }}
          />
        </div> */}
        <AnimatePresence>
          {carrusel.fotos && <Fotos orientacion={orien} />}
        </AnimatePresence>
        <AnimatePresence>
          {carrusel.web && <Web orientacion={orien} />}
        </AnimatePresence>
        <AnimatePresence>
          {carrusel.diseno && <Diseno orientacion={orien} />}
        </AnimatePresence>
        {/* <div className="flechaDere" onClick={() => adelante()}>
          <Flecha />
        </div> */}
      </section>
    </>
  );
};

export default Home;
