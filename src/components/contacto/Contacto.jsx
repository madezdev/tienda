import { useNavigate } from "react-router-dom";

export const Contacto = () => {

  const datosFormulario = React.useRef(); //Creo la referencia
  let navigate = useNavigate(); //Ubicacion actual de mi componente
  
  const consultarFormulario = (e) => {
    e.preventDefault();
    console.log(datosFormulario.current); //Consulto el estado actual del formulario
    const datForm = new FormData(datosFormulario.current); //Genero un objeto iterator de esos datos
    const contacto = Object.fromEntries(datForm); //Transforma en un objeto literal
    console.log(contacto);
    e.target.reset(); //Reseteo el formulario
    navigate("/"); //Redirijo a pagina inicial
  };

  return (
    <div className="checkout__from contenedor" style={{ marginTop: "20px" }}>
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
            <input
              type="email"
              className="checkout__input"
              name="email"
              placeholder="Ingresa tu email"
            />
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
            <input
              type="text"
              className="checkout__input"
              name="cp"
              placeholder="Ingresa el CP de tu domicilio"
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
  );
};
