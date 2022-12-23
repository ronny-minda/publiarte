import React, { useState } from "react";
import { motion } from "framer-motion";

const Personas = () => {
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
      setAminacion({ transform: "translate(0px, -300px)", opacity: 0 }),
    transition: { type: "spring", duration: 1.5, bounce: 0 },
  };

  return (
    <>
      <section className="personas">
        <div className="conte">
          <motion.div
            initial={{ transform: "translate(0px, -300px)", opacity: 0 }}
            {...animation}
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
            initial={{ transform: "translate(0px, -300px)", opacity: 0 }}
            {...animation}
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
            initial={{ transform: "translate(0px, -300px)", opacity: 0 }}
            {...animation}
          >
            <h2>RONNY MINDA</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Personas;
