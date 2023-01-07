import react, { useState } from "react";
import { motion } from "framer-motion";
import Deco2 from "../svg/decoracion/Deco2";

const QuienesSomos = () => {
  const [animacion, setAminacion] = useState({});

  const animation = {
    variants: {
      hidden: animacion,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setAminacion({ transform: "translate(0px, 0px)", opacity: 1 }),
    onViewportLeave: () =>
      setAminacion({ transform: "translate(0px, -200px)", opacity: 0 }),
    transition: { type: "spring", duration: 1.5, bounce: 0 },
  };

  return (
    <>
      <section className="quienesSomos">
        <h2 className="tituloMobil">QUIENES SOMOS</h2>

        <Deco2 />

        <motion.div
          initial={{ transform: "translate(0px, -200px)", opacity: 0 }}
          {...animation}
          className="titulo"
        ></motion.div>
        <motion.div
          initial={{ transform: "translate(0px, -200px)", opacity: 0 }}
          {...animation}
          className="texto"
        >
          <div>
            <p>
              PubliArte es una empresa conformada por familia y amigos, llevamos
              más de 20 años de trayectoria en el ámbito publicitario y
              marketing, entre nuestra función está realizar todo tipo de diseño
              para cualquier superficie en la que la mente pueda trabajar,
              fotografía, ya sea de productos o un evento importante, somos los
              indicados, y por último, pero no menos importante diseño Web,
              juntamos todas nuestras habilidades como equipo para darte a ti un
              servicio de lo mejor, tú solo dinos tus ideas nosotros las
              mejoramos y las hacemos realidad.
            </p>
            <div className="logoQuienes"></div>
          </div>
        </motion.div>
        <motion.div {...animation} className="logoPencil"></motion.div>
      </section>
    </>
  );
};

export default QuienesSomos;
