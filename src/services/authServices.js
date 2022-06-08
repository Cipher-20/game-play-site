const baseUrl = 'http://localhost:3030'

export const register = async (email, password) => {
    let response = await fetch(`${baseUrl}/users/register`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    localStorage.setItem('email', result.email);
    localStorage.setItem('authToken', result.accessToken);

    if (response.ok) {
        return result;
    } else {
        throw result.message;
    }
}