import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import SessionContext from '../../redux/reducers/sessionReducer';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { session } = useContext(SessionContext);
    return (
        <Route
            {...rest}
            render={ props => {
                if(session) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/login' />;
                }
            }}
        />
    );
};