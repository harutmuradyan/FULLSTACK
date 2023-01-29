import {useState} from "react";
import { Navigate, Outlet } from "react-router-dom";

export function RoutesApp () {
    const [logined , setLogined] = useState(false);
    const [roleAdmin , setRoleAdmin] = useState(false);

    const PublicRoute = () => {
        return logined ? <Navigate to="/" /> : <Outlet />;
    }
    
    const PrivateRoute = () => {
        return logined ? <Outlet /> : <Navigate to="/" />;
    }

    const PrivetRouteAdmin = () => {
        return logined && roleAdmin ? <Outlet/> : <Navigate to="/" />
    }

    return {
        PublicRoute,
        PrivateRoute,
        PrivetRouteAdmin
    }
} 