import { Link } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";

export const Cart = () => {
  const carrito = [
    {
      id: 1,
      nombre: "Arroz",
      modelo: "1",
      img: "https://firebasestorage.googleapis.com/v0/b/tienda-coder-7b231.appspot.com/o/guitarra_01.jpg?alt=media&token=b8e4ed00-5097-49f9-ada9-a68448cb5a87",
      precio: 400,
      cantidad: 5,
    },
    // {
    //   id: 2,
    //   nombre: "Fideos",
    //   modelo: "2",
    //   img: "guitarra_02.jpg",
    //   precio: 300,
    //   cantidad: 2,
    // },
    // {
    //   id: 3,
    //   nombre: "Manteca",
    //   modelo: "3",
    //   img: "guitarra_03.jpg",
    //   precio: 500,
    //   cantidad: 3,
    // },
  ];

  return (
    <>
      {carrito.length === 0 ? (
        <>
          <div className="contenedor">
            <h2 className="heading">Carrito de compras vacio</h2>
            <Link className="carrito__comprar" to={"/"}>
              Continuar comprando
            </Link>
          </div>
        </>
      ) : (
        <div className="contenedor">
          <h2 className="heading">Carrito de compras</h2>

          <div className="contenido">
            <div className="">
              <p>Resumen de compra</p>
              
              <ItemList products={carrito} plantilla={'itemCart'}/>

            </div>

            <aside className="resumen">
              <p>Total a pagar: precio total</p>
              <button>Vaciar carrito</button>
              <Link to={"/"}>
                <button>Continuar comprando</button>
              </Link>
              <Link to={"/checkout"}>
                <button>Finalizar compra</button>
              </Link>
            </aside>
          </div>
        </div>
      )}
    </>
  );
};
