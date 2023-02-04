import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  return (
    <div className="detalle">
      <img
        className="detalle__imagen"
        src={`../img/imgProducts/${item.img}`}
        alt={`Imagen de ${item.nombre}`}
      />
      <div className="detalle__contenido">
        <h3 className="detalle__nombre">{item.nombre}</h3>
        <h4 className="detalle__marca">Marca: {item.marca}</h4>
        <p className="detalle__descripcion">{item.descripcion}</p>
        <p className="detalle__precio">
            ${new Intl.NumberFormat("de-DE").format(item.precio)}
          </p>
        <p className="detalle__stock">Stock: { item.stock }</p>
       <div><ItemCount valInicial={1} stock={item.stock} /></div> 
        <button className="detalle__comprar">Agregar al carrito</button>
      </div>
    </div>
  );
};
