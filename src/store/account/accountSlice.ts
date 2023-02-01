import { AccountActionTypes, AccountState, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESSFUL, LOG_OUT } from "./types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState : AccountState = {
    user : null,
    error: null,
    token: null
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccount: (state, action: PayloadAction<AccountState>) => {
             return state = action.payload;
        }
    }
})

export const {setAccount} = accountSlice.actions;
export default accountSlice.reducer;
