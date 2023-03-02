import { Link } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";
import '../../styles/cart.css'


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
          <div className="cart__contenedor">
            <h2 className="cart__heading">Carrito de compras vacio</h2>
            <Link className="cart__continuar--btn" to={"/"}>
              Continuar comprando
            </Link>
          </div>
        </>
      ) : (
        <div className="cart__contenedor">
          <h2 className="cart__heading">Carrito de compras</h2>

          <div className="cart__contenido">
            <div className="">
              <p className="cart__textoResumen">Resumen de compra</p>
            <hr className="cart__line"/>
              <ItemList products={carrito} plantilla={'itemCart'}/>
            <hr className="cart__line"/>
            </div>

            <aside className="cart__resumen">

              <p className="cart__total">Total a pagar: <span className="cart__totalBolt">$2.000</span></p>

            <div className="cart__botones">
             
              <Link to={"/checkout"}>
                <button className="cart__btnFinalizar btn">Finalizar compra</button>
              </Link>

              <Link to={"/"}>
                <button className="cart__btnContinuar btn">Continuar comprando</button>
              </Link>

              <Link to={"/"}>
              <button className="cart__btnVaciar btn">Vaciar carrito</button>
              </Link>

            </div>
            
            </aside>
          </div>
        </div>
      )}
    </>
  );
};
