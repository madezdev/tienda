import { useCarritoContext } from '../../context/CarritoContext';
import {IoMdCart} from 'react-icons/io';
import { Link } from 'react-router-dom';



export const CartWidget = () => {
  
  const { getItemQuantity } = useCarritoContext();

  return (
    
  <Link to={"/cart"}>
    <button type="button" className="cartWidget__boton">
        <i className='cartWidget__icono'> <IoMdCart/> { getItemQuantity() > 0 && <span className='cantCarrito'> { getItemQuantity() }</span> } </i> 
    </button>
  </Link>
  )
}
