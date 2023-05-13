import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { PostsRests } from '../../api/rests/posts.rests';
import { IGetPostsResponsePayload } from '../../api/types/posts.types';
import { IApiState } from '../../api/types';

export type TPostsState = IApiState<IGetPostsResponsePayload>;

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        data: [],
        error: undefined,
    } as TPostsState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createGetAllPostsAction.pending, state => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(createGetAllPostsAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(createGetAllPostsAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
    },
});

export const createGetAllPostsAction = createAsyncThunk(`${postsSlice.name}/createGetAllPostsAction`, async () => {
    const { data } = await api(PostsRests.GET_ALL);
    return data as IGetPostsResponsePayload;
});

export default postsSlice;
