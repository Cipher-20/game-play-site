const baseUrl = 'http://localhost:3030'



function getAuthToken(){
    return localStorage.getItem('authToken');
}

function getUsername(){
    return localStorage.getItem('username');
}

function getUserId(){
    return localStorage.getItem('userId');
}


export const register = (user) =>{
    localStorage.setItem('email', user.email)
}

export const login = (user) =>{
    localStorage.setItem('email', user.email)
}

// export const register = async (user) => {
//     localStorage.setItem('authToken', user.accessToken);

//     let response = await fetch(`${baseUrl}/users/register`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Authorization': getAuthToken()
//         },
//         body: JSON.stringify(user.email, user.password)
//     });

//     let result = await response.json();



//     if (response.ok) {
//         return result;
//     } else {
//         throw result.message;
//     }
// }

// export const login = async (email, password) => {
//     let response = await fetch(`${baseUrl}/users/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Authorization': getAuthToken()
//         },
//         body: JSON.stringify({ email, password })
//     });

//     let result = await response.json();

//     if (response.ok) {
//         return result;
//     } else {
//         throw result.message;
//     }
// }

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

