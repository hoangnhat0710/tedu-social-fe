import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootState } from ".././store/index";


export default function AccountRoute ({ children }: { children: JSX.Element }) {
    const account = useSelector( (state: RootState) => state.account);
    console.log(account.token);
    if(account.token) {
        return <Navigate to="/admin" />;
    }
    return children;
};

