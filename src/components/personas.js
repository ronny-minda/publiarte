import React, { useState } from "react";
import { motion } from "framer-motion";
import Mundo from "../svg/logos/mundo";
import Linkedin from "../svg/logos/linkedin";
import GitHub from "../svg/logos/gitHub";

const Personas = () => {
  const [animacion1, setAminacion1] = useState({});
  const [animacion2, setAminacion2] = useState({});
  const [animacion3, setAminacion3] = useState({});

  const animatio1 = {
    variants: {
      hidden: animacion1,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setAminacion1({ transform: "translate(0px, 0px)", opacity: 1 }),

    onViewportLeave: () =>
      setAminacion1({ transform: "translate(0px, -100px)", opacity: 0 }),
    transition: { type: "spring", duration: 1.5, bounce: 0 },
  };
  const animatio2 = {
    variants: {
      hidden: animacion2,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setAminacion2({ transform: "translate(0px, 0px)", opacity: 1 }),
    onViewportLeave: () =>
      setAminacion2({ transform: "translate(0px, -100px)", opacity: 0 }),
    transition: { type: "spring", duration: 1.5, bounce: 0 },
  };
  const animatio3 = {
    variants: {
      hidden: animacion3,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setAminacion3({ transform: "translate(0px, 0px)", opacity: 1 }),
    onViewportLeave: () =>
      setAminacion3({ transform: "translate(0px, -100px)", opacity: 0 }),
    transition: { type: "spring", duration: 1.5, bounce: 0 },
  };

  return (
    <>
      <section className="personas">
        <div className="conte">
          <motion.div
            initial={{ transform: "translate(0px, -100px)", opacity: 0 }}
            {...animatio2}
          >
            <h2>ELIHU STRASSER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </motion.div>
        </div>
        <div className="conte">
          <motion.div
            initial={{ transform: "translate(0px, -100px)", opacity: 0 }}
            {...animatio1}
          >
            <h2>DAVID STRASSER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </motion.div>
        </div>
        <div className="conte">
          <motion.div
            initial={{ transform: "translate(0px, -100px)", opacity: 0 }}
            {...animatio3}
          >
            <h2>RONNY MINDA</h2>
            <p>
              Soy un desarrollador web con más de 2 años de experiencia
              contribuyendo desde el Front-End al desarrollo de aplicaciones web
              y UI. Mi interés siempre ha girado al rededor de la UX, por ese
              motivo enfoqué mi carrera de desarrollo de software, estudiando en
              la Escuela Superior Instituto Superior Universitario
              Bolivariano(Itb).
            </p>
            <div className="logos">
              <a
                href="https://www.ronnyminda.ga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mundo />
                <span>www.ronnyminda.ga</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ronny-minda-v-a44261214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                <span>Ronny Minda V.</span>
              </a>
              <a
                href="https://github.com/ronny-minda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
                <span>github.com/ronny-minda</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Personas;
