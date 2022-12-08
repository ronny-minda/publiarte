import react from "react";

import LogoEstatico from "../svg/logoEstatico";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <LogoEstatico />
      </div>
      <nav>
        <li>
          <a href="#"> INICIO </a>
        </li>
        <li>
          <a href="#"> NOSOTROS </a>
        </li>
        <li>
          <a href="#"> EQUIPO </a>
        </li>
        <li>
          <a href="#"> CLIENTE </a>
        </li>
        <li>
          <a href="#"> PORAFFOLIO </a>
        </li>
      </nav>
      <div className="cotizar">
        <a href="#">COTIZAR</a>
      </div>
    </header>
  );
};

export default Header;
