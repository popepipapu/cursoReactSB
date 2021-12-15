import './Signin.page.css'
import React from 'react';
import { useContext } from 'react';
import SessionContext from '../../redux/reducers/sessionReducer';
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
    const { setSession } = useContext(SessionContext);
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
                setSession(true);
                let path = `store`; 
                history.push(path);
            }
            event.preventDefault();
        }
    }

    return (
        <div className="container">
            <div className="row col-sm-6 offset-sm-3">
                <div className="form-box">
                    {userExist && <div>Este usuario está ocupado, prueba a entrar</div>}
                    <Formik
                        validationSchema={validaciones}
                        initialValues={initialValues}
                        onSubmit={signIn}>
                        {({ values, touched, errors }) => (
                            <Form className="formulario-logIn">
                            <h4>Formulario <span>Registro</span></h4>
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
                                <button type="submit" className="btn btn-success">Crear usuario</button>
                                <button className="btn btn-primary" onClick={createUser}>¿Ya estás registrado? Entra aquí</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}