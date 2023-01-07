import react, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Web = ({ orientacion }) => {
  const [image, seImage] = useState("/imgWeb/img2.svg");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("imgWeb/img");
      seImage((image) => {
        if (image === "/imgWeb/img1.svg") {
          return "/imgWeb/img2.svg";
        }
        if (image === "/imgWeb/img2.svg") {
          return "/imgWeb/img3.png";
        }
        if (image === "/imgWeb/img3.png") {
          return "/imgWeb/img4.svg";
        }
        if (image === "/imgWeb/img4.svg") {
          return "/imgWeb/img5.svg";
        }
        if (image === "/imgWeb/img5.svg") {
          return "/imgWeb/img1.svg";
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
        className="web"
      >
        <AnimatePresence>
          <motion.img
            key={image}
            src={image}
            initial={{
              opacity: 0,
              x: -1300,
              z: -0,
              y: -1300,
              rotateY: -100,
              rotateZ: -0,
              rotateX: 100,
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
              z: -0,
              y: 1300,
              rotateY: 100,
              rotateZ: -0,
              rotateX: -100,
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

export default Web;
