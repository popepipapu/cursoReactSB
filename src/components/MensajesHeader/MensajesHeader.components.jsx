import './MensajesHeader.components.css';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function MensajesHeader(props) {

  const validaciones = Yup.object().shape({
    asunto: Yup.string()
      .required('Por favor, escribe un asunto.')
      .min(3, 'Mínimos 3 carácteres.'),   
    email: Yup.string().email('Formato email inválido').required('Por favor, escribe un email'),
    mensaje: Yup.string()
      .required("Por favor, escribe un mensaje")
      .min(10, 'Mínimos 10 carácteres.')
      .max(255, 'Máximos 255 carácteres.'),

  });

let initialValues = { asunto: '', email: '', mensaje: '' };

  return (
    <div className="MensajesHeader">
    <strong>Mi formulario</strong>
      <Formik validationSchema={validaciones} initialValues={initialValues}
        onSubmit={props.clickNuevo}>
        {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit} className="formulario">
            <input className="Elemento" placeholder="Asunto" type="text"
                name="asunto" onChange={handleChange} value={values.asunto} />
                {errors.asunto ? (<div className="errors">{errors.asunto}</div>) : null}

            <input className="Elemento" placeholder="Introduce tu email"
                    name="email" onChange={handleChange} value={values.email} />
                    {errors.email ? (<div className="errors">{errors.email}</div>) : null}

            <input className="Elemento" placeholder="Introduce tu mensaje..."
                    name="mensaje" onChange={handleChange} value={values.mensaje} />
                    {errors.mensaje ? (<div className="errors">{errors.mensaje}</div>) : null}

          <button className="Nuevo" type="submit">Nuevo</button> 
        </form>
        )}
      </Formik>
      <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>
    </div> 
  );
}