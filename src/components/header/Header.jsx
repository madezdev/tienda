import { NavBar } from "../navBar/NavBar";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__contenedor">
        <div className="header__barra">
          <a href="/">
            <img className="header__logo" src="./img/logo.svg" alt="GuitarLa" />
          </a>
          <NavBar />
        </div>
      </div>
      <img
        className="header__guitarra"
        src="./img/header_guitarra.png"
        alt="Guitarra header"
      />
    </header>
  );
};
