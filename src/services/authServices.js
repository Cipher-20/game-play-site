const baseUrl = 'http://localhost:3030'

export const register = async (email, password) => {
    let response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let result = await response.json();



    if (response.ok) {
        return result;
    } else {
        throw result.message;
    }
}

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    let result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw result.message;
    }
}

export const isAuthticated = () =>{
    return Boolean(getUser());
}

export const getUser = () =>{
    let email = localStorage.getItem('email');
    return email;
}

export const logout = () =>{
    localStorage.removeItem('email');
}

