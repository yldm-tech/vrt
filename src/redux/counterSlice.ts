import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from '@/service/userService';

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number) => {
        const response = await userAPI.fetchById(userId);
        return response.data;
    }
);
type CounterState = {
    loading: boolean,
    count: number,
    users: []
}

const state: CounterState = {
    loading: false,
    count: 1,
    users: []
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: state,
    reducers: {
        increment(state, action) {
            state.count = state.count + 1;
        },
        decrement(state, action) {
            state.count = state.count - 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchUserById.fulfilled,
            (state: any, action: { payload: { data: any; }; }) => {
                state.loading = false;
                state.users = action.payload && action.payload.data;
            });
        builder.addCase(
            fetchUserById.pending, (state: CounterState, action: any) => {
                state.loading = true;
            });
        builder.addCase(
            fetchUserById.rejected, (state: CounterState, action: any) => {
                state.loading = false;
            });
    }
});

export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;

