import react, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portafolio = () => {
  const [animacion1, setAminacion1] = useState({});
  const [animacion2, setAminacion2] = useState({});
  const [valor, setValor] = useState({
    web: true,
    foto: false,
    diseno: false,
  });

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

  const web = () => {
    console.log("web");
    setValor({
      ...valor,
      web: true,
      foto: false,
      diseno: false,
    });
  };
  const foto = () => {
    console.log("foto");
    setValor({
      ...valor,
      web: false,
      foto: true,
      diseno: false,
    });
  };
  const diseno = () => {
    console.log("diseno");
    setValor({
      ...valor,
      web: false,
      foto: false,
      diseno: true,
    });
  };

  return (
    <>
      <section className="Potafolio">
        <motion.div
          initial={{ transform: "translate(0px, -100px)", opacity: 0 }}
          {...animatio1}
          className="LogoPortafolio"
        ></motion.div>

        <motion.div
          initial={{ transform: "translate(0px, -100px)", opacity: 0 }}
          {...animatio2}
        >
          <div className="botones">
            <div
              className={`WEB ${valor.web ? "activo" : null}`}
              onClick={() => web()}
            >
              PAGINAS WEB
            </div>
            <div
              className={`FOTOGRAFIA ${valor.foto ? "activo" : null}`}
              onClick={() => foto()}
            >
              FOTOGRAFIA
            </div>
            <div
              className={`DISENO ${valor.diseno ? "activo" : null}`}
              onClick={() => diseno()}
            >
              DISEÑO GRAFICO
            </div>
          </div>
          <span
            style={{
              position: "relative",
              width: "100%",
              height: "863px",
              display: "inline-block",
            }}
          >
            <AnimatePresence>
              {valor.web && (
                <motion.div
                  initial={{ opacity: 0, translateX: -400 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: 400 }}
                  transition={{ duration: 1 }}
                  className="contePortafolio"
                >
                  <img src="/imgPortafolioWeb/img1.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img2.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img3.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img4.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img5.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img6.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img7.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img8.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img9.jpg" alt=""></img>
                  <img src="/imgPortafolioWeb/img10.jpg" alt=""></img>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {valor.foto && (
                <motion.div
                  initial={{ opacity: 0, translateX: -400 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: 400 }}
                  transition={{ duration: 1 }}
                  className="contePortafolio"
                >
                  <h3>fotografia</h3>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {valor.diseno && (
                <motion.div
                  initial={{ opacity: 0, translateX: -400 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: 400 }}
                  transition={{ duration: 1 }}
                  className="contePortafolio"
                >
                  <h3>Diseno grafico</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </span>
        </motion.div>
      </section>
    </>
  );
};

export default Portafolio;
