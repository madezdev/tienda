import React from "react";
import { useState } from "react";
import { Error } from "../error/Error";
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
  
  const [nombreApellido, setNombreApellido] = useState('')
  const [email, setEmail] = useState('')
  const [RepetirEmail, setRepetirEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [cp, setCp] = useState('')
  const [error, setError] = useState(false)

  const { carrito, emptyCart, totalPrice } = useCarritoContext();
  const datosFormulario = React.useRef(); //Creo la referencia


  let navigate = useNavigate();

  const consultarFormulario = (e) => {
    e.preventDefault();
    
    //validacion del Formulario
    if([ nombreApellido, email, RepetirEmail, telefono, direccion, cp].includes('')){
      console.log('Hay al menos un campo vacio');
      setError(true)
      return;
    }
    if (email !== RepetirEmail) {
      console.log('No coinciden los email');
      setRepetirEmail('')
      setError(true)
      return;
    }
    setError(false)

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
        } por un total de $ ${new Intl.NumberFormat("de-DE").format(totalPrice())
      } fue realizada con exito`,{
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }
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
          
          {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
            <fieldset>
              <legend>Datos personales</legend>

              <div className="checkout__label nombreApellido">
                <label htmlFor="nombre" className="form-label">
                  Nombre y Apellido
                </label>
                <input
                  className="checkout__input"
                  id="nombre"
                  type="text"
                  placeholder="Ingresa nombre y apellido"
                  value={nombreApellido}
                  onChange={(e) => setNombreApellido(e.target.value)}
                />
              </div>

              <div className="checkout__label email">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input 
                className="checkout__input" 
                id="email"
                type="email" 
                name="email" 
                placeholder="Ingresa tu email" 
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="checkout__label email">
                <label htmlFor="repEmail" className="form-label">
                  Repetir Email
                </label>
                <input
                  className="checkout__input"
                  id="repEmail"
                  type="email"
                  name="repEmail"
                  placeholder="Repetir email"
                  
                  value={RepetirEmail}
                  onChange={(e) => setRepetirEmail(e.target.value)}
                />
              </div>

              <div className="checkout__label celular">
                <label htmlFor="celular" className="form-label">
                  Número de contacto
                </label>
                <input
                  className="checkout__input"
                  id="celular"
                  type="text"
                  name="celular"
                  placeholder="Ingresa tu teléfono"
                  pattern="[0-9]{2}[0-9]{4}[0-9]{4}" 
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div className="checkout__label direccion">
                <label htmlFor="direccion" className="form-label">
                  Direccion de destino
                </label>
                <input
                  className="checkout__input"
                  id="direccion"
                  type="text"
                  name="direccion"
                  placeholder="Ingresa una dirección"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                />
              </div>

              <div className="checkout__label direccion">
                <label htmlFor="cp" className="form-label">
                  Código Postal
                </label>
                <input 
                className="checkout__input"
                id="cp" 
                type="text" 
                name="cp" 
                placeholder="Ingresa el CP de tu domicilio"
                value={cp}
                onChange={(e) => setCp(e.target.value)}
                />
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
