import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
});

const jwtPrefix = 'Bearer ';

instance.interceptors.request.use(config => {
    const authorization: string = jwtPrefix + localStorage.getItem('access_token');
    config.headers['Authorization'] = authorization;
    
    return config;
}, (error) => {
    console.log(error);

    return Promise.reject(error);
});

export default instance;
