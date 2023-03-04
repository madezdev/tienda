import React from "react";
import { useForm } from "react-hook-form";
import { useCarritoContext } from "../../context/CarritoContext";
import {
  createOrdenCompra,
  getOrdenCompra,
  getProducto,
  updateProducto,
} from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "../../styles/checkout.css";

export const Checkout = () => {
  
  const { carrito, emptyCart, totalPrice } = useCarritoContext();
  const datosFormulario = React.useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  let navigate = useNavigate();

  const consultarFormulario = (e) => {
    e.preventDefault();
    const datForm = new FormData(datosFormulario.current);
    const cliente = Object.fromEntries(datForm);

    const aux = [...carrito];

    aux.forEach((prodCarrito) => {
      getProducto(prodCarrito.id).then((prodBDD) => {
        prodBDD.stock -= prodCarrito.cant; //Descuento del stock la cantidad comprada
        updateProducto(prodCarrito.id, prodBDD);
      });
    });

    createOrdenCompra(
      cliente,
      aux,
      totalPrice(),
      new Date().toISOString()
    ).then((ordenCompra) => {
      toast.success(
        `¡Muchas gracias por comprar con nosotros!, su orden de compra con el ID: ${
          ordenCompra.id
        } por un total de $ ${new Intl.NumberFormat("de-DE").format(
          totalPrice()
        )} fue realizada con exito`
      );
      emptyCart();
      e.target.reset();
      navigate("/");
    });
  };

  return (
    <>
      {carrito.length === 0 ? (
        <>
          <h2>No posee productos en el carrito</h2>
          <Link className="nav-link" to={"/"}>
            <button className="btn btn-dark">Continuar comprando</button>
          </Link>
        </>
      ) : (
        
        <div
          className="checkout__from contenedor"
          style={{ marginTop: "20px" }}>
          
          <form
            className="formulario"
            onSubmit={consultarFormulario}
            ref={datosFormulario}>

            <fieldset>
              <legend>Datos personales</legend>

              <div className="checkout__label nombreApellido">
                <label htmlFor="nombre" className="form-label">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  className="checkout__input"
                  name="nombre"
                  placeholder="Ingresa nombre y apellido"
                />
              </div>

              <div className="checkout__label email">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="checkout__input" name="email" placeholder="Ingresa tu email" />
              </div>

              <div className="checkout__label email">
                <label htmlFor="repEmail" className="form-label">
                  Repetir Email
                </label>
                <input
                  type="email"
                  className="checkout__input"
                  name="repEmail"
                  placeholder="Repetir email"
                />
              </div>

              <div className="checkout__label celular">
                <label htmlFor="celular" className="form-label">
                  Número de contacto
                </label>
                <input
                  type="text"
                  className="checkout__input"
                  name="celular"
                  placeholder="Ingresa tu teléfono"
                />
              </div>

              <div className="checkout__label direccion">
                <label htmlFor="direccion" className="form-label">
                  Direccion de destino
                </label>
                <input
                  type="text"
                  className="checkout__input"
                  name="direccion"
                  placeholder="Ingresa una dirección"
                />
              </div>

              <div className="checkout__label direccion">
                <label htmlFor="cp" className="form-label">
                  Código Postal
                </label>
                <input type="text" className="checkout__input" name="cp" placeholder="Ingresa el CP de tu domicilio"/>
              </div>

              <div className="checkout__sumit">
                <button type="submit" className="btnFinalizar btn">
                  Finalizar Compra
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </>
  );
};
