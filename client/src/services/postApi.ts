import axios from "axios";

const postApi = axios.create({
    baseURL: "http://localhost:3000/posts",
    withCredentials: true,
});

export default postApi;
