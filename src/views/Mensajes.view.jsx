import React from 'react';
import MensajesHeader from '../components/MensajesHeader/MensajesHeader.components';
import MensajesTable from '../components/MensajesTable/MensajesTable.components';
import './Mensajes.view.css';

// import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
/* Fichero Mensajes.view.jsx */

import {
  borrarMensaje, crearMensaje, leerMensaje, vaciarMensajes
} from '../redux/actions/mensajes';


export default function Mensajes() {
  // const [mensajes, setMensajes] = useState([]);
  const mensajes = useSelector(state => state).mensajes;  // El estado inicial será '[]'
  const dispatch = useDispatch();
    
  let crear = (values) => {
    let nuevo = {
      "asunto": values.asunto,
      "email": values.email,
      "mensaje": values.mensaje,
      "leido": false
    };
  
    dispatch(crearMensaje(nuevo));
  }
  let vaciar = () => { dispatch(vaciarMensajes()); }
  let eliminar = (index) => { dispatch(borrarMensaje(index)); }
  let leer = (index) => { dispatch(leerMensaje(index)); }

  return (
    <div className="mensajes-container">
      <div className="Mensajes">
        <MensajesHeader clickNuevo={crear} clickEliminar={vaciar}>
        </MensajesHeader>

        <MensajesTable mensajes={mensajes}
        clickEliminarUno={eliminar} clickMarcarLeido={leer}>
        </MensajesTable>
      </div>
    </div>
  );
}