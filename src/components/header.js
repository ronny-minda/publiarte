import react from "react";
import Deco1 from "../svg/decoracion/Deco1";

import LogoEstatico from "../svg/logoEstatico";

const Header = () => {
  const despla = (e, des) => {
    e.preventDefault();
    window.scrollTo({ top: des, behavior: "smooth" });
    // console.log(window.screenTop);
    // window.scrollTo({ top: 1000, left: 100, behavior: 'smooth' });
  };

  return (
    <header>
      <Deco1 />
      <div
        className="contenedore"
        style={{
          top: "0",
          left: "0",
          zIndex: "5",
          position: "relative",
        }}
      >
        <div className="logo">
          <LogoEstatico />
          <LogoEstatico className="espejo" />
        </div>
        <nav>
          <li>
            <a href="" onClick={(e) => despla(e, 0)}>
              INICIO
            </a>
            <div className="ani"></div>
          </li>
          <li>
            <a href="" onClick={(e) => despla(e, 870)}>
              NOSOTROS
            </a>
            <div className="ani"></div>
          </li>
          <li>
            <a href="" onClick={(e) => despla(e, 1730)}>
              EQUIPO
            </a>
            <div className="ani"></div>
          </li>
          <li>
            <a href="" onClick={(e) => despla(e, 3000)}>
              CLIENTE
            </a>
            <div className="ani"></div>
          </li>
          <li>
            <a href="" onClick={(e) => despla(e, 0)}>
              PORTAFOLIO
            </a>
            <div className="ani"></div>
          </li>
        </nav>
        <div className="cotizar">
          <a
            href="https://api.whatsapp.com/send?phone=593993105654&text=Hola, Nececito mas informacion!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="logo"></div>
            COTIZAR
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
