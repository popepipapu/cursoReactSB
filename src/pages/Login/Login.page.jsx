import './Login.page.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { logInSession } from '../../redux/actions/session.js';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import  { useHistory  } from 'react-router-dom';

export default function Login(props) {

    const validaciones = Yup.object().shape({
        usuario: Yup.string()
            .required('Por favor, escribe tu usuario.')
            .email('El email es incorrecto'),
        password: Yup.string()
            .required('Por favor, escribe una contraseña')
            .min(6, 'Debe tener al menos 6 carácteres'),

    });
    const dispatch = useDispatch();
    const history = useHistory();
    
    let initialValues = { usuario: '', password: '' };

    let createUser = () => {
        let path = `singin`; 
        history.push(path);
    }

    let login = (event) => {
        let retrievedObject = JSON.parse(localStorage.getItem('usuario_'+event.usuario));
        if (retrievedObject) {
            if(event.usuario === retrievedObject.usuario && event.password === retrievedObject.password){
                dispatch(logInSession({}));
                let path = `MensajesPage`; 
                history.push(path);
            }
        }
        event.preventDefault();
    }

    return (
        <>
        <Formik
            validationSchema={validaciones}
            initialValues={initialValues}
            onSubmit={login}>
            {({ values, touched, errors }) => (
                <Form className="formulario-logIn">
                    <strong>Inicia Sesión</strong>

                    <div className={[touched.usuario && errors.usuario && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu email..." name="usuario" value={values.usuario} />
                        {touched.usuario && errors.usuario && <div className="errors">{errors.usuario}</div>}
                    </div>
                    <div className={[touched.password && errors.password && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu password..." name="password" value={values.password} />
                        {touched.password && errors.password && <div className="errors">{errors.password}</div>}
                    </div>
                    <button className="nuevo">Iniciar Sesión</button>
                    <button type="button" className="iniciarSesion" onClick={createUser}>¿No estás registrado? Regístrate aquí</button>
                </Form>
            )}
        </Formik>
    
        </>
    );
}