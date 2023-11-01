import axios from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: "http://26.168.3.60:8233"
 })

 export default api;

