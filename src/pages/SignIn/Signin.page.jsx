import './Signin.page.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { logInSession } from '../../redux/actions/session.js';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { Redirect } from 'react-router';
import  { useHistory  } from 'react-router-dom';

export default function Login(props) {

    const validaciones = Yup.object().shape({
        usuario: Yup.string()
            .required('Por favor, escribe tu usuario.')
            .email('El email es incorrecto'),
        password: Yup.string()
            .required('Por favor, escribe una contraseña')
            .min(6, 'El pass debe tener al menos 6 carácteres.'),

    });
    const dispatch = useDispatch();
    const history = useHistory();
    let initialValues = { usuario: '', password: '' };

    let createUser = () => {
        let path = `login`; 
        history.push(path);
    }

    let userExist = false;

    let signIn = (event) => {
        if(localStorage.getItem('usuario_'+event.usuario)){
            userExist = true;
        }else{
            if (event.usuario && event.password) {
                let localStorageUser = { usuario: event.usuario, password: event.password }
                localStorage.setItem("usuario_"+event.usuario, JSON.stringify(localStorageUser));
                dispatch(logInSession({}));
                let path = `store`; 
                history.push(path);
            }
            event.preventDefault();
        }
    }

    return (
        <div>
        {userExist && <div>Este usuario está ocupado, prueba a entrar</div>}
        <Formik
            validationSchema={validaciones}
            initialValues={initialValues}
            onSubmit={signIn}>
            {({ values, touched, errors }) => (
                <Form className="formulario-logIn">
                    <strong>Crea tu usuario</strong>

                    <div className={[touched.usuario && errors.usuario && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu email..." name="usuario" value={values.usuario} />
                        {touched.usuario && errors.usuario && <div className="errors">{errors.usuario}</div>}
                    </div>
                    <div className={[touched.password && errors.password && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu password..." name="password" value={values.password} />
                        {touched.password && errors.password && <div className="errors">{errors.password}</div>}
                    </div>
                    <button type="submit" className="nuevo">Crear usuario</button>
                    <button className="iniciarSesion" onClick={createUser}>¿Ya estás registrado? Entra aquí</button>
                </Form>
            )}
        </Formik>
        </div>
    );
}