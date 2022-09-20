import React from 'react';
import { Navigate } from 'react-router-dom';


interface Props{
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<Props>= ({children}: Props) => {
    // const token = localStorage.getItem("access_token");
    const token ="123";
    
    return(
        <>
        {token ?
            children
            : <Navigate to="/" replace />
        }
        </>
    )
}