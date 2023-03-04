import { Link } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";
import { useCarritoContext } from "../../context/CarritoContext";
import '../../styles/cart.css'


export const Cart = ( ) => {
  
   const { carrito, totalPrice, emptyCart } = useCarritoContext();


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
              <ItemList products={ carrito } plantilla={'itemCart'}/>
            <hr className="cart__line"/>
            </div>

            <aside className="cart__resumen">

              <p className="cart__total">Total a pagar: <span className="cart__totalBolt">{new Intl.NumberFormat('de-DE').format(totalPrice())}</span></p>
        
            <div className="cart__botones">
             
              <Link to={"/checkout"}>
                <button className="cart__btnFinalizar btn">Finalizar compra</button>
              </Link>

              <Link to={"/"}>
                <button className="cart__btnContinuar btn">Continuar comprando</button>
              </Link>

              <Link to={"/cart"}>
              <button 
              className="cart__btnVaciar btn"
              onClick={() => emptyCart()}
              >Vaciar carrito</button>
              </Link>

            </div>
            
            </aside>
          </div>
        </div>
      )}
    </>
  );
};
