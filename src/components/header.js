import react from "react";

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
      <div className="logo">
        <LogoEstatico />
      </div>
      <nav>
        <li>
          <a href="" onClick={(e) => despla(e, 0)}>
            INICIO
          </a>
        </li>
        <li>
          <a href="" onClick={(e) => despla(e, 870)}>
            NOSOTROS
          </a>
        </li>
        <li>
          <a href="" onClick={(e) => despla(e, 1730)}>
            EQUIPO
          </a>
        </li>
        <li>
          <a href="" onClick={(e) => despla(e, 3000)}>
            CLIENTE
          </a>
        </li>
        <li>
          <a href="" onClick={(e) => despla(e, 0)}>
            PORTAFOLIO
          </a>
        </li>
      </nav>
      <div className="cotizar">
        <a href=""> COTIZAR </a>
      </div>
    </header>
  );
};

export default Header;
