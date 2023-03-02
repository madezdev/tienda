
export const ItemCart = ({ item }) => {

  return (
    <div className="itemCart__contenedor">
      <div className="itemCart__contenedorImg">
        <img
          src={item.img}
          alt={`Imagen de producto ${item.nombre}`}
          className="itemCart__img"
        />
      </div>

      <div className="itemCart__body">
        <h5 className="itemCart__nombre">{item.nombre}</h5>
        <p className="itemCart__cant"> Cantidad: {item.cantidad} </p>
        <p className="itemCart__precio">
          {" "}
          Precio Unitario: ${new Intl.NumberFormat("de-DE").format(item.precio)}
        </p>
        <p className="itemCart__subtotal">
          Subtotal: $
          {new Intl.NumberFormat("de-DE").format(item.precio * item.cantidad)}
        </p>
      <button
        className="itemCart__btnEliminar"
        onClick={() => "Borrar producto"}>
        Eliminar del Carrito
      </button>
      </div>

    </div>
  );
};
