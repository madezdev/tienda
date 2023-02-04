import {IoMdCart} from 'react-icons/io';





export const CartWidget = ({cantCarrito}) => {
  return (
    
    <button type="button" className="cartWidget__boton">
        <i className='cartWidget__icono'> <IoMdCart/> {cantCarrito} </i> 
    </button>

  )
}
