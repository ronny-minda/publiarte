import react, { useState } from "react";
import { motion } from "framer-motion";

const Clientes = () => {
  const [animacion, setAminacion] = useState({});
  const [salle, setSalle] = useState({});
  const [CTO, setCTO] = useState({});
  const [casa, setcasa] = useState({});
  const [Facso, setFacso] = useState({});
  const [nails, setnails] = useState({});
  const [media, setmedia] = useState({});
  const [bobcat, setbobcat] = useState({});

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

  const LAsalle = {
    variants: {
      hidden: salle,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setSalle({
        transform: "translate(0px, 0px)",
        opacity: 1,
        transition: { type: "spring", delay: 0.2, duration: 1.5, bounce: 0 },
      }),
    onViewportLeave: () =>
      setSalle({
        transform: "translate(50px, 0px)",
        opacity: 0,
        transition: { type: "spring", delay: 0, duration: 0.1, bounce: 0 },
      }),
  };

  const LACTO = {
    variants: {
      hidden: CTO,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setCTO({
        transform: "translate(0px, 0px)",
        opacity: 1,
        transition: { type: "spring", delay: 0.4, duration: 1.5, bounce: 0 },
      }),
    onViewportLeave: () =>
      setCTO({
        transform: "translate(50px, 0px)",
        opacity: 0,
        transition: { type: "spring", delay: 0, duration: 0.1, bounce: 0 },
      }),
  };

  const LAcasa = {
    variants: {
      hidden: casa,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setcasa({
        transform: "translate(0px, 0px)",
        opacity: 1,
        transition: { type: "spring", delay: 0.6, duration: 1.5, bounce: 0 },
      }),
    onViewportLeave: () =>
      setcasa({
        transform: "translate(50px, 0px)",
        opacity: 0,
        transition: { type: "spring", delay: 0, duration: 0.1, bounce: 0 },
      }),
  };

  const LAFacso = {
    variants: {
      hidden: Facso,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setFacso({
        transform: "translate(0px, 0px)",
        opacity: 1,
        transition: { type: "spring", delay: 0.8, duration: 1.5, bounce: 0 },
      }),
    onViewportLeave: () =>
      setFacso({
        transform: "translate(50px, 0px)",
        opacity: 0,
        transition: { type: "spring", delay: 0, duration: 0.1, bounce: 0 },
      }),
  };

  const LAnails = {
    variants: {
      hidden: nails,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setnails({
        transform: "translate(0px, 0px)",
        opacity: 1,
        transition: { type: "spring", delay: 1, duration: 1.5, bounce: 0 },
      }),
    //   duration: 1.5
    onViewportLeave: () =>
      setnails({
        transform: "translate(50px, 0px)",
        opacity: 0,
        transition: { type: "spring", delay: 0, duration: 0.1, bounce: 0 },
      }),
  };

  const LAmedia = {
    variants: {
      hidden: media,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setmedia({
        transform: "translate(0px, 0px)",
        opacity: 1,
        transition: { type: "spring", delay: 1.4, duration: 1.5, bounce: 0 },
      }),
    onViewportLeave: () =>
      setmedia({
        transform: "translate(50px, 0px)",
        opacity: 0,
        transition: { type: "spring", delay: 0, duration: 0.1, bounce: 0 },
      }),
  };

  const LAbobcat = {
    variants: {
      hidden: bobcat,
      visible: { opacity: 1 },
      slideStart: { opacity: 0 },
      slideEnd: { opacity: 1 },
    },
    animate: ["hidden"],
    viewport: {
      amount: 0.4,
    },
    onViewportEnter: () =>
      setbobcat({
        transform: "translate(0px, 0px)",
        opacity: 1,
        transition: { type: "spring", delay: 1.6, duration: 1.5, bounce: 0 },
      }),
    onViewportLeave: () =>
      setbobcat({
        transform: "translate(50px, 0px)",
        opacity: 0,
        transition: { type: "spring", delay: 0, duration: 0.1, bounce: 0 },
      }),
  };

  return (
    <>
      <section className="clientes">
        <motion.div
          initial={{ transform: "translate(0px, -200px)", opacity: 0 }}
          {...animation}
          className="nuestros"
        ></motion.div>
        <div className="cliente">
          <motion.div
            initial={{ transform: "translate(50px, 0px)", opacity: 0 }}
            {...LAsalle}
            className="laSalle"
          ></motion.div>
          <motion.div
            initial={{ transform: "translate(50px, 0px)", opacity: 0 }}
            {...LACTO}
            className="CTO"
          ></motion.div>
          <motion.div
            initial={{ transform: "translate(50px, 0px)", opacity: 0 }}
            {...LAcasa}
            className="casa"
          ></motion.div>
          <motion.div
            initial={{ transform: "translate(50px, 0px)", opacity: 0 }}
            {...LAFacso}
            className="Facso"
          ></motion.div>
          <motion.div
            initial={{ transform: "translate(50px, 0px)", opacity: 0 }}
            {...LAnails}
            className="nails"
          ></motion.div>
          <motion.div
            initial={{ transform: "translate(50px, 0px)", opacity: 0 }}
            {...LAmedia}
            className="media"
          ></motion.div>
          <motion.div
            initial={{ transform: "translate(50px, 0px)", opacity: 0 }}
            {...LAbobcat}
            className="bobcat"
          ></motion.div>
        </div>
      </section>
    </>
  );
};

export default Clientes;
