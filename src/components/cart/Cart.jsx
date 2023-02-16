import { Link } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";


export const Cart = () => {
  const carrito = [
    {
      id: 1,
      nombre: "Arroz",
      modelo: "1",
      img: "apple-tv.jpg",
      precio: 400,
      cantidad: 5,
    },
    {
      id: 2,
      nombre: "Fideos",
      modelo: "2",
      img: "apple-tv.jpg",
      precio: 300,
      cantidad: 2,
    },
    {
      id: 3,
      nombre: "Manteca",
      modelo: "3",
      img: "apple-tv.jpg",
      precio: 500,
      cantidad: 3,
    },
  ];

  return (
    <>
        {
          carrito.length === 0 ? 
            <>
              <h2>Carrito vacio</h2>
              <Link to={"/"}>
                <button>Continuar comprando</button>
              </Link>
            </>
         : 
            <div className="contenedor">

              { <ItemList products={ carrito } plantilla={ 'itemCart' } /> }

              <div>
                <p>Resumen de compra: precio total</p>
                <button>Vaciar carrito</button>
                <Link to={"/"}>
                  <button>Continuar comprando</button>
                </Link>
                <Link to={"/checkout"}>
                  <button>Finalizar compra</button>
                </Link>
              </div>
            </div>
        }
    </>
  );
};


