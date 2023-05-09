import axios from "axios";

const client = axios.create({
    baseURL: "https://whoget.onrender.com/api"
})


export default client;