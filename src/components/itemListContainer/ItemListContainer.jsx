import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";

export const ItemListContainer = () => {

  const [productos, setproductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {

    if (idCategoria) {

      fetch('../json/productos.json')
        .then((res) => res.json())
        .then((items) => {

          const products = items.filter(
            (prod) => prod.idCategoria === (idCategoria));

          const productList = ItemList({ products });
          setproductos(productList);

        });

    }else{

      fetch('/json/productos.json')
        .then((res) => res.json())
        .then((products) => {

          const productList = ItemList({ products });
          setproductos(productList);

        });

    }

  }, [idCategoria]);

  return (
    <div className="productos productos__contenedor">
      <div className="productos__grid"> { productos } </div>
    </div>
  );
};
