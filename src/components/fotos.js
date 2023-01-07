import react, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Fotos = ({ orientacion }) => {
  const [animacion, setAminacion] = useState({});
  const [image, seImage] = useState("/imgFoto/img2.png");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("imgFoto/img");
      seImage((image) => {
        if (image === "/imgFoto/img1.png") {
          return "/imgFoto/img2.png";
        }
        if (image === "/imgFoto/img2.png") {
          return "/imgFoto/img3.png";
        }
        if (image === "/imgFoto/img3.png") {
          return "/imgFoto/img4.svg";
        }
        if (image === "/imgFoto/img4.svg") {
          return "/imgFoto/img1.png";
        }
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // const animation = {
  //   variants: {
  //     hidden: animacion,
  //     visible: { opacity: 1 },
  //     slideStart: { opacity: 0 },
  //     slideEnd: { opacity: 1 },
  //   },
  //   animate: ["hidden"],
  //   viewport: {
  //     amount: 0.4,
  //   },
  //   onViewportEnter: () =>
  //     setAminacion({ transform: "translate(0px, 0px)", opacity: 1 }),
  //   onViewportLeave: () =>
  //     setAminacion({ transform: "translate(0px, -200px)", opacity: 0 }),
  //   transition: { type: "spring", duration: 1.5, bounce: 0 },
  // };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, translateX: orientacion ? 400 : -400 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: orientacion ? -400 : 400 }}
        transition={{ duration: 0.5 }}
        className="fotos"
      >
        <AnimatePresence>
          <motion.img
            key={image}
            src={image}
            initial={{
              opacity: 1,
              x: 1300,
              z: -1000,
              rotateY: 80,
              rotateZ: -0,
              rotateX: -0,
              translateX: 0,
            }}
            animate={{
              opacity: 1,
              x: -0,
              z: -0,
              rotateY: -0,
              rotateZ: -0,
              rotateX: -0,
              translateX: 0,
            }}
            exit={{
              opacity: 1,
              x: -1300,
              z: -1000,
              rotateY: -80,
              rotateZ: -0,
              rotateX: -0,
              translateX: 0,
            }}
            transition={{ duration: 2 }}
          />
        </AnimatePresence>
        <motion.div
          // initial={{ transform: "translate(0px, -200px)", opacity: 0 }}
          // {...animation}
          className="dere"
        ></motion.div>
        <motion.div
          // initial={{ transform: "translate(0px, -200px)", opacity: 0 }}
          // {...animation}
          className="izqui"
        >
          {/* <div className="aux"></div> */}
          <div className="fondo"></div>
          <div className="logoHome"></div>
        </motion.div>
        <div className="gradienteAbajo"></div>
      </motion.section>
    </>
  );
};

export default Fotos;

{
  /* <AnimatePresence>
          <motion.img
            key={"/img3.png"}
            src={"/img3.png"}
            initial={{
              opacity: 0,
              x: 900,
              z: 900,
              rotateY: 150,
              rotateZ: 150,
              rotateX: 150,
            }}
            animate={{
              opacity: 1,
              x: 0,
              z: -1000,
              rotateY: -80,
              rotateZ: -0,
              rotateX: -0,
              translateX: 0,
            }}
            exit={{
              opacity: 0,
              x: -900,
              z: -900,
              rotateY: 150,
              rotateZ: 150,
              rotateX: 150,
            }}
            transition={{ duration: 2 }}
          />
        </AnimatePresence> */
}
