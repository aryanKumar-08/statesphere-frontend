import axios from "axios";
const apiRequest = axios.create({
    baseURL : "https://statesphere-backend-1.onrender.com",
    withCredentials: true
})

export default apiRequest;
