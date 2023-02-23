import { NavBar } from "../navBar/NavBar";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__contenedor">
        <div className="header__barra">
          <a href="/">
            <img
              className="header__logo"
              src="https://firebasestorage.googleapis.com/v0/b/tienda-coder-7b231.appspot.com/o/logo.svg?alt=media&token=5354cde1-c190-4691-87d8-dc71d9985d74"
              alt="GuitarLa"
            />
          </a>
          <NavBar />
        </div>
      </div>
      
    </header>
  );
};
