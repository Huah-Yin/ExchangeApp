import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://47.108.183.65/api',
});
instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token;
        console.log(token);
    }
    return config;
});
export default instance;
