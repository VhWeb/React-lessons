import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {useSelector} from "react-redux";
import {getCurrentAuthState} from "./redux/selectors/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(getCurrentAuthState);
    return (
        <Route {...rest} render={
            props => user ? <Component {...rest} {...props} /> : <Redirect to='/signin'/>
        } />
    )
}

export default PrivateRoute;