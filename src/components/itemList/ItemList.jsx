import { Item } from "../item/Item";
import { ItemCart } from "../ItemCart/ItemCart";

//Recibe como propiedad un array de productos y retorna un jsx
export const ItemList = ({ products, plantilla }) => {
  return (
    <>
      {
        plantilla === "item"
        ? 
        products.map(producto => <Item item={producto} key={producto.id}/>)
        : 
        products.map(producto => <ItemCart item={producto} key={producto.id}/>)
      }
    </>
  );
};
