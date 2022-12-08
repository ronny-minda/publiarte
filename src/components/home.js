import react, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
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
      <motion.section {...animation} className="home">
        <div className="dere"></div>
        <div className="izqui">
          <div className="logoHome"></div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;

// https://codesandbox.io/s/framer-motion-scroll-triggered-animation-whileinview-d7tduv?from-embed=&file=/src/App.tsx
