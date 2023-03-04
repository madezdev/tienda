import { ItemCount } from "../itemCount/ItemCount";
import { useCarritoContext } from "../../context/CarritoContext";

//Plantilla del producto
export const ItemDetail = ({ item }) => {
  

  const { addItem } = useCarritoContext();

  const onAdd = (cantidad) => {
    addItem(item,cantidad);
  };
  console.log(onAdd);

  return (
    <div className="detalle">
      <img
        className="detalle__imagen"
        src={item.img}
        alt={`Imagen de ${item.nombre}`}
      />

      <div iv className="detalle__contenido">
        <h3 className="detalle__nombre"> {item.nombre}</h3>
        <h4 className="detalle__marca"> Marca:{item.marca}</h4>
        <p className="detalle__descripcion"> {item.descripcion}</p>
        <p className="detalle__precio">
          ${new Intl.NumberFormat("de-DE").format(item.precio)}
        </p>
        <p className="detalle__stock"> Stock: {item.stock}</p>

        <div>
          <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd} />
        </div>

        
      </div>
    </div>
  );
};
