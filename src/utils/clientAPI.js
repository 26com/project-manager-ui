import axios from "axios";

import { url } from "../constants";
//import changeLogining from "./changeLogining";

const clientAPI = axios.create({
    baseURL: url,
    responseType: "json"
});

clientAPI.interceptors.request.use((request) => {
    request.headers["Content-Type"] = "application/json";
    request.headers.Authorization = localStorage.access_token;
    request.headers.withCredentials = true;
    return request;
});

clientAPI.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if(error && error.response){
        console.log(error);
        // if(error.response.status === 401){
        //     changeLogining(false);
        // };
        return Promise.reject(error);
    };

});

export default clientAPI;