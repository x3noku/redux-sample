import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';

export type TCounterState = {
    isLoading: boolean;
    count: number;
    error?: SerializedError;
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoading: false,
        count: 0,
        error: undefined,
    } as TCounterState,
    reducers: {
        createIncrementAction: state => {
            state.count += 1;
        },
        createDecrementAction: state => {
            state.count -= 1;
        },
    },
    extraReducers: builder => {
        builder.addCase(createAsyncChangeAction.pending, state => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(createAsyncChangeAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(createAsyncChangeAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.count += action.payload;
        });
    },
});

export const createAsyncChangeAction = createAsyncThunk(
    `${counterSlice.name}/createAsyncChangeAction`,
    async (value: number) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return value;
    },
);

export const { createIncrementAction, createDecrementAction } = counterSlice.actions;

export default counterSlice;
