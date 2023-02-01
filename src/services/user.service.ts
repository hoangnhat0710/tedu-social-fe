import env from 'react-dotenv';

const login = (email: string, password: string) => {
     const request = {
        methods: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({email, password})
     }

     return fetch(`${env.API_URL}/api/v1/auth`, request)
     .then((res) => {
        sessionStorage.setItem('user', JSON.stringify(res));
        return res;
     });
}

const logout = () => {
     sessionStorage.removeItem('user');
}

export const userService = {
    login,
    logout
}