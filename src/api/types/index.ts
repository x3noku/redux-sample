import { SerializedError } from '@reduxjs/toolkit';
import { AxiosError, isAxiosError } from 'axios';

export interface IApiState<D> {
    isLoading: boolean;
    data?: D;
    error?: SerializedError;
}

export class ApiError extends AxiosError {
    constructor(error: any) {
        super(error?.message, error?.code, error?.config, error?.request, error?.response);

        this.name = error?.name;
        this.stack = error?.stack;

        if (isAxiosError(error)) {
            this.code = (error?.response?.data as any)?.code?.toString();
            this.message = (error?.response?.data as any)?.message;
        }
    }
}
