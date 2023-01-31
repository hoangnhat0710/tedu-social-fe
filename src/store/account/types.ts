export const LOGIN_REQUEST = "LOGIN _REQUEST" ;
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL" ;
export const LOGIN_FAILURE= "LOGIN_FAILURE" ;

export const LOG_OUT = "LOG_OUT" ;

export interface AuthenticatedUser {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

export interface LoginRequest {
    type: typeof LOGIN_REQUEST,
    payload: {
        email: string;
        password: string;
    }
}

export interface LoginSuccess {
    type: typeof LOGIN_SUCCESSFUL;
    payload: {
      token: string;
    };
}

export interface LoginFailure {
    type: typeof LOGIN_FAILURE;
    payload: {
      error: string;
    };
  }
  
export interface Logout {
    type: typeof LOG_OUT;
  }

export interface AccountState{
    user: AuthenticatedUser | null;
    loading: boolean;
    error: string | null;
    token: string | null;
}

export type AccountActionTypes = LoginRequest | LoginFailure | LoginSuccess | Logout