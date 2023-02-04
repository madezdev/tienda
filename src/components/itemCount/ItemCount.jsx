import { useState } from "react"

export const ItemCount = ({valInicial, stock}) => {
    
    const [contador, setContador] = useState(valInicial)
            //Var       //Modificar var     //Estado inicial

    const sumar = () =>  (contador < stock) && setContador(contador + 1) //contador = contador + 1
    const restar = () => (contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else


  return (
    <>
        
        <button className="producto__count" onClick={() => restar()}>--</button>
            {contador}
        <button className="producto__count" onClick={() => sumar()}>+</button>
    </>
  )
}