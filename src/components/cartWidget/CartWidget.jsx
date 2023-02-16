import {IoMdCart} from 'react-icons/io';
import { Link } from 'react-router-dom';





export const CartWidget = ({ cantCarrito }) => {
  
  return (
    
  <Link to={"/cart"}>
    <button type="button" className="cartWidget__boton">
        <i className='cartWidget__icono'> <IoMdCart/> { cantCarrito } </i> 
    </button>
  </Link>
  )
}
