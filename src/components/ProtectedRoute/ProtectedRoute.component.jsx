import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const session = useSelector(state => state).session;
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