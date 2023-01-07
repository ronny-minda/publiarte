import react, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Diseno = ({ orientacion }) => {
  const [image, seImage] = useState("/imgDiseno/img2.svg");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("imgDiseno/img");
      seImage((image) => {
        if (image === "/imgDiseno/img1.svg") {
          return "/imgDiseno/img2.svg";
        }
        if (image === "/imgDiseno/img2.svg") {
          return "/imgDiseno/img3.svg";
        }
        if (image === "/imgDiseno/img3.svg") {
          return "/imgDiseno/img1.svg";
        }
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, translateX: orientacion ? 400 : -400 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: orientacion ? -400 : 400 }}
        transition={{ duration: 0.5 }}
        className="diseno"
      >
        <AnimatePresence>
          <motion.img
            key={image}
            src={image}
            initial={{
              opacity: 1,
              x: -1300,
              z: -1000,
              y: 1000,
              rotateY: -80,
              rotateZ: -80,
              rotateX: -0,
              translateX: 0,
            }}
            animate={{
              opacity: 1,
              x: -0,
              z: -0,
              y: 0,
              rotateY: -0,
              rotateZ: -0,
              rotateX: -0,
              translateX: 0,
            }}
            exit={{
              opacity: 1,
              x: 1300,
              z: -1000,
              y: -1000,
              rotateY: 80,
              rotateZ: -80,
              rotateX: -0,
              translateX: 0,
            }}
            transition={{ duration: 2 }}
          />
        </AnimatePresence>
        <div className="gradiente"></div>
        <div className="gradienteAbajo"></div>

        <div className="fondoDiseno"></div>
        <div className="logoHome"></div>
      </motion.section>
    </>
  );
};

export default Diseno;
