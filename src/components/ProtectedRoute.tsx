import React from 'react'
import { Navigate, RouteProps } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from ".././store/index";



export default function ProtectedRoute({ children }: { children: JSX.Element }) {
   
   const account = useSelector( (state: RootState) => state.account);
   
   if(!account.token) {
    return <Navigate to="/login" />;
   }
   return children;
}
