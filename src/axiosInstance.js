import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://shoppix-api.vercel.app",
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
    }
})

export default axiosInstance