import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";
import { getProductos } from "../../firebase/firebase"; 

//consulta una base de datos y envia a otro componente que se encarga de listar
//muestra todos los productos
export const ItemListContainer = () => {

  const [productos, setproductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {

    if (idCategoria) {

        
       getProductos()
        .then(items => {

          const products = items.filter(
            prod => prod.idCategoria === (idCategoria));

          const productList = <ItemList products={products} plantilla={'item'}/>;
          setproductos(productList);

        });

    }else{

        getProductos()
        .then(products => {

          const productList = <ItemList products={products} plantilla={'item'}/>;
          setproductos(productList);

        });

    }

  }, [idCategoria]);

  return (
    <div className="productos productos__contenedor">
      <h1 className="productos__titulo">Lista de productos</h1>
      <div className="productos__grid"> { productos } </div>
    </div>
  );
};
