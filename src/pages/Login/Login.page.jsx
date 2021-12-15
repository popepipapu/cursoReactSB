import './Login.page.css'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import  { useHistory  } from 'react-router-dom';
import { useContext } from 'react';
import SessionContext from '../../redux/reducers/sessionReducer';

export default function Login(props) {

    const validaciones = Yup.object().shape({
        usuario: Yup.string()
            .required('Por favor, escribe tu usuario.')
            .email('El email es incorrecto'),
        password: Yup.string()
            .required('Por favor, escribe una contraseña')
            .min(6, 'Debe tener al menos 6 carácteres'),

    });
    const { setSession } = useContext(SessionContext);
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
                setSession(true);
                let path = `store`; 
                history.push(path);
            }
        }
        event.preventDefault();
    }

    return (
        <div className="container">
            <div className="row col-sm-6 offset-sm-3">
                <div className="form-box">
                    <Formik
                        validationSchema={validaciones}
                        initialValues={initialValues}
                        onSubmit={login}>
                        {({ values, touched, errors }) => (
                            <Form className="formulario-logIn">
                                <h4>Formulario <span>Login</span></h4>
                                <div className="form-group">
                                <label for="usuario">Usuario</label>
                                {touched.usuario && errors.usuario && <div id="nameError" className="sr-only" role="alert">{errors.usuario}</div>}
                                    <div className={[touched.usuario && errors.usuario && "errorInput", "input-group"].join(' ')}>
                                        <Field className="form-control" placeholder="Introduce tu email..." name="usuario" value={values.usuario} />
                                    </div>
                                </div>

                                <div className="form-group">
                                <label for="password">Password</label>
                                {touched.password && errors.password && <div id="nameError" className="sr-only" role="alert">{errors.password}</div>}
                                    <div className={[touched.password && errors.password && "errorInput", "input-group"].join(' ')}>
                                        <Field className="form-control" placeholder="Introduce tu password..." name="password" value={values.password} />
                                    </div>
                                </div>
                                
                                <button type="submit" className="btn btn-success">Iniciar Sesión</button>
                                <button type="button" className="btn btn-primary" onClick={createUser}>¿No estás registrado? Regístrate aquí</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
