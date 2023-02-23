
export const ItemCart = ({ item }) => {
 
  return (
    <div className="contenedor__cart">
      <div className="card_img">
        <img
          
          src={item.img}
          alt={`Imagen de producto ${item.nombre}`}
          className="img__cart"
        />
      </div>

      <div className="card__body">
        <h5 className="card__title">{item.nombre}</h5>
        <p className="card__text"> Cantidad: {item.cantidad} </p>
        <p className="card__text">
          {" "}
          Precio Unitario: ${new Intl.NumberFormat("de-DE").format(item.precio)}
        </p>
        <p className="card__text">
          Subtotal: $
          {new Intl.NumberFormat("de-DE").format(item.precio * item.cantidad)}
        </p>
      </div>

      <button className="card__btn" onClick={() => "Borrar producto"}>
        Eliminar del Carrito
      </button>
    </div>
  );
};
