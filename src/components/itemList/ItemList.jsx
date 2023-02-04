import { Item } from "../item/Item"

export const ItemList = ( { products } ) => {
  return (
    
    <>

    {products.map((producto) => (

        <Item item = { producto } key={producto.id}/>

    ))}
    
    </>


  )
}
