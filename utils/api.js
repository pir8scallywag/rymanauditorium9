// import axios module
const axios = require("axios");



const api = {
    // Return promise for GitHub api response to get user data.
    getUser(response) {
        const url = `https://api.github.com/users/${response}`;
        return axios.get(url);
    }
};

module.exports = api;