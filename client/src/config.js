import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:  "https://thawing-inlet-75700.herokuapp.com/api/",
})
