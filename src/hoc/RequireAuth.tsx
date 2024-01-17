import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({ children }: { children: any }) => {
    const location = useLocation();
    const auth = Boolean(localStorage.getItem('token'));

    if (!auth) {
        return <Navigate to={'/login'} state={{ from: location }} />
    }
    return children
}