import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from '@/service/userService';

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number) => {
        const response = await userAPI.fetchById(userId)
        return response.data
    }
)
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 1,
        users: []
    },
    reducers: {
        increment(state, action) {
            console.log(state);
            console.log(action); //包含type,payload
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
                state.users = action.payload && action.payload.data;
            })
    }
})

export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;

