import axios from 'axios';

const api = axios.create({
    baseURL: "https://first-back.herokuapp.com",
});

export default api;
