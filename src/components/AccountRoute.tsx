import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { AppState } from '../store';
import { AccountState } from '../store/account/types';


export default function AccountRoute ({ children }: { children: JSX.Element }) {
    const account: AccountState = useSelector( (state: AppState) => state.account);
    console.log(account.token);
    if(account.token) {
        return <Navigate to="/admin" />;
    }
    return children;
};

