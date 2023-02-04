import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  
  const [producto, setProducto] = useState([]);
  const {id} = useParams();

  useEffect(() => {

    fetch("../json/productos.json")
      .then((res) => res.json())
      .then((products) => {
        const item = products.find((prod) => prod.id === parseInt(id));
        setProducto(item);
      });

  }, []);

  return (

    <main className="contenedor">

      <ItemDetail item = { producto } />

    </main>
    
  );
};
