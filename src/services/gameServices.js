const baseUrl = 'http://localhost:3030/data'

export function getAll() {
    return (fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(res => res.json())
    )

}

export function getOne(id) {
    return (fetch(`${baseUrl}/games/${id}`)
        .then(res => res.json())
    )

}

export function gameLatest() {
    return (fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(res => res.json())
    )

}

export const gameCreate= async (gameData, token) => {
    let response = await fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(gameData)
    });

    let result = await response.json();

    return result;
}