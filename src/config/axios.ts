import axios from "axios";

const client = axios.create({
    baseURL: "https://whoget.onrender.com"
})


export default client;