import { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export const ItemCount = ({valInicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(valInicial)
        

    const sumar = () =>  (contador < stock) && setContador(contador + 1) //contador = contador + 1
    const restar = () => (contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else

    const agregarCarrito = () => {
      onAdd(contador)
      toast(`👌 Agregaste ${contador} productos al carrito!`,{autoClose: 1000,}) 
    }
    
    
  return (
    <>
        
        <button className="producto__count" onClick={() => restar()}>--</button>
            {contador}
        <button className="producto__count" onClick={() => sumar()}>+</button>
        <button className="detalle__comprar"onClick={() => agregarCarrito() }>Agregar al carrito</button>
        
        <Link to={"/"}>
            <button className="cart__btnContinuar btn" style={{marginTop:'1rem'}}>Continuar comprando</button>
        </Link>
    </>
  )
}