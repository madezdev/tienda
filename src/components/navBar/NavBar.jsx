import { Link } from "react-router-dom";
import { CartWidget } from "../cartWidget/CartWidget";
import { Categorias } from "./categorias/Categorias";


export const NavBar = () => {
  return (
    <>
      <nav className="navegacion">
                
        <Link className="navegacion__enlace" to={'/'}>
          Inicio
        </Link>
        <Link className="navegacion__enlace" to={'/'}>
          Nosotros
        </Link>
        <Link className="navegacion__enlace" to={'/'}>
          Blog
        </Link>
        
          <Categorias/>
        
        <CartWidget cantCarrito={0} />
      </nav>
    </>
  );
};
