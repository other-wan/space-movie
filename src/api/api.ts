
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


const axiosParam: AxiosRequestConfig = {
    baseURL: "https://api.themoviedb.org/3"
}

const axiosInstance: AxiosInstance = 
    axios.create( axiosParam );

const api = (axios: AxiosInstance) => {

    return {
        get: <T> (
            url: string, config: AxiosRequestConfig = {}
        ) => axios.get<T>(url, config),
    }
};


export default api(axiosInstance);
// eslint-disable-next-line react-hooks/exhaustive-deps