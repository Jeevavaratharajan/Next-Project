const { default: axios } = require("axios");

export const AxiosApi = axios.create({
    baseURL:"http://localhost:8000/api",
    
})