import { AxiosError, AxiosResponse } from 'axios';
import { ApiError } from './types';

export const loggingRequestInterceptorHandlers = [
    (config: any) => {
        console.log(`Fetching ${config.method} ${config.url ?? ''}`);

        return config;
    },
] as const;

export const loggingResponseInterceptorHandlers = [
    (response: AxiosResponse) => {
        console.log(`Succeed ${response.config.method} ${response.config.url ?? ''} with`, response);

        return response;
    },
    async (error?: AxiosError) => {
        console.log(`Failed ${error?.config?.method} ${error?.config?.url ?? ''} with`, error);

        return Promise.reject(error);
    },
] as const;

export const transformErrorInterceptorHandler = async (error?: ApiError) => {
    return Promise.reject(new ApiError(error));
};
