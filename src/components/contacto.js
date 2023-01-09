import react, { useState } from "react";
import { motion } from "framer-motion";
import FondoContacto from "../svg/fondo/fondoContaco";

const Contacto = () => {
  const [animacion2, setAminacion2] = useState({});

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

  return (
    <section className="formPubliare">
      <h2>Contacto</h2>

      <motion.form
        initial={{ transform: "translate(0px, -100px)", opacity: 0 }}
        {...animatio2}
        onClick={(e) => e.preventDefault()}
      >
        <label>
          <span>Nombre</span>
          <input
            // placeholder="Nombre"
            name="nombre"
            type="text"
            autocomplete="name"
            required=""
          />
        </label>
        <label>
          <span>Email</span>
          <input
            // placeholder="Email"
            name="email"
            type="text"
            autocomplete="email"
            required=""
          />
        </label>
        <label>
          <span>Mensaje</span>
          <textarea
            className="mensaje"
            name="mensaje"
            // placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </label>

        <input value="Enviar" className="submit" type="submit" />
      </motion.form>

      <FondoContacto className="FondoContacto" />
    </section>
  );
};

export default Contacto;
