import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { getProducto } from "../../firebase/firebase";

//Consulta de la base de dato un producto por id y lo envia 
//Se muestra el detalle de un producto 
export const ItemDetailContainer = () => {
  
  const [ producto, setProducto ] = useState([]);
  const { id } = useParams();

  useEffect(() => {

      getProducto(id)
      .then( item => {
        setProducto(item);
      });

  }, []);

  return (

    <main className="contenedor">
      
      <ItemDetail item = { producto } />

    </main>
    
  );
};
