import { Link } from "react-router-dom";

export const Categorias = () => {
  return (

    <div className="dropdown">
     <Link to={'/'}> <button className="dropbtn ">Tienda</button> </Link>
      <div className="dropdown-content">
        <Link to={"/category/Guitarras-Electricas"}>Guitarras Eléctrica</Link>
        <Link to={"/category/Guitarras-Criollas"}>Guitarras criolla</Link>
        <Link to={"/category/Amplificadores"}>Amplificadores</Link>
        <Link to={"/category/Accesorios"}>Cuerdas</Link>
      </div>
    </div>
    
  );
};
