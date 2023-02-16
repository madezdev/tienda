import { Item } from "../item/Item"


export const ItemList = ( { products, plantilla } ) => {
  
  return (
    
    <>
      
        
        {products.map( producto  =>  <Item item = { producto } key={producto.id}/>  ) }
       
    </>


  )
}
