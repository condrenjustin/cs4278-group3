import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider.js'

export default function PrivateRoute({ children }){
    const {currentUser} = useAuth()
    console.log(currentUser);
    return currentUser.includes("@koacore") ? children : <Navigate to="/" />;
}