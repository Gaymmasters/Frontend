import React from "react";
import { Navigate, Outlet, Route } from "react-router";
import { store } from "..";

const PrivateRoute = (props) => {
    const isLogin = store.getState.isLogin
    if (isLogin){
        return <Outlet/>
    }
    else{
        return <Navigate to={props.way} />
    }
};

export default PrivateRoute;