import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterSlice from './slices/counter';

const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
    },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

export const useAppDispatch: () => TDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default store;
