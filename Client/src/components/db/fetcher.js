const fetcher = {

    getClothes(userIdString, callback) {
        fetch(`http://localhost:9001/items/${userIdString}`, {method: "GET"})
        .then(response => response.json())
        .then(callback);
    },
    postClothes(itemData, callback) {
        const requestOptions = { headers: { "Content-Type" : "application/json"}, method: "POST", body: JSON.stringify(itemData) }
        fetch(`http://localhost:9001/items/`, requestOptions)
        .then(response => response.json())
        .then(callback)
    },
    deleteClothes(itemData, callback) {
        const requestOptions = { headers: { "Content-Type" : "application/json"}, method: "DELETE", body: JSON.stringify(itemData) }
        fetch(`http://localhost:9001/items/${itemData._id}`, requestOptions)
        .then(response => response.json())
        .then(callback)
    },

    getUsers(callback) {
        fetch(`http://localhost:9001/users/`)
        .then(response => response.json())
        .then(callback)
    },
    postUser(userData, callback) {
        const requestOptions = { headers: { "Content-Type" : "application/json"}, method: "POST", body: JSON.stringify(userData) }
        fetch(`http://localhost:9001/users/`, requestOptions)
        .then(response => response.json())
        .then(callback)
    },

    loginUser(userData, callback) {
        const requestOptions = { headers: { "Content-Type" : "application/json"}, method: "POST", body: JSON.stringify(userData) };
        fetch(`http://localhost:9001/login/` , requestOptions)
        .then(response => response.json())
        .then(callback)
    },

    getFavorites(userID, callback) {
        fetch(`http://localhost:9001/favorites/${userID}`)
        .then(response => response.json())
        .then(console.log(callback))
        .then(callback)
    },
    postFavorite(itemObj, callback) {
        const requestOptions = { headers: { "Content-Type" : "application/json"}, method: "POST", body: JSON.stringify(itemObj) };
        fetch(`http://localhost:9001/favorites/`, requestOptions)
        .then(response => response.json())
        .then(console.log(callback))
        .then(callback)
    },

    getSets(callback) {
        fetch(`http://localhost:9001/sets/`)
        .then(response => {
            return response.json();
        }).then(callback)
    },
}

export default fetcher;