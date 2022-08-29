import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://burgerbuilder-dcabd-default-rtdb.firebaseio.com/'
})

export default axiosInstance;