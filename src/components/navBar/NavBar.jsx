import { Link, useLocation } from "react-router-dom";
import { CartWidget } from "../cartWidget/CartWidget";
import { Categorias } from "./categorias/Categorias";


export const NavBar = () => {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <>
      <nav className="navegacion">
                
        <Link className={splitLocation[1] === "" ? "navegacion__active" : "navegacion__enlace "} to={'/'}>
          Inicio
        </Link>
        <Link className={splitLocation[1] === "nosotros" ? "navegacion__active" : "navegacion__enlace "} to={'/nosotros'}>
          Nosotros
        </Link>
        <Link className={splitLocation[1] === "blog" ? "navegacion__active" : "navegacion__enlace "} to={'/blog'}>
          Blog
        </Link>
        
          <Categorias/>
        
        <CartWidget cantCarrito={0} />
      </nav>
    </>
  );
};
