import axios from 'axios';
import {
    loggingRequestInterceptorHandlers,
    loggingResponseInterceptorHandlers,
    transformErrorInterceptorHandler,
} from './interceptors';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(...loggingRequestInterceptorHandlers);

api.interceptors.response.use(response => response, transformErrorInterceptorHandler);
api.interceptors.response.use(...loggingResponseInterceptorHandlers);

export default api;
