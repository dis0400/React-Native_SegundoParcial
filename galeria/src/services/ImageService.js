import axios from "axios";

const BASE_URL = "http://localhost:3000/images";
const imageInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default imageInstance;