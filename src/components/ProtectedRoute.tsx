import React from 'react'
import { Navigate, RouteProps } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AccountState } from '../store/account/types';
import { AppState } from '../store';



export default function ProtectedRoute({ children }: { children: JSX.Element }) {
   
   const account: AccountState = useSelector((state: AppState) => state.account);
   
   if(!account.token) {
    return <Navigate to="/login" />;
   }
   return children;
}
