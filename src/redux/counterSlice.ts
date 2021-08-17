import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from '@/service/userService';

export const fetchUserById = createAsyncThunk(
	'users/fetchByIdStatus',
	async (userId: number) => {
		const response = await userService.fetchById(userId);
		return response.data;
	}
);
type CounterState = {
	loading: boolean;
	count: number;
	users: [];
};

const initialState: CounterState = {
	loading: false,
	count: 1,
	users: [],
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.count += 1;
		},
		decrement(state) {
			state.count -= 1;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			fetchUserById.fulfilled,
			(state: CounterState, action: { payload: any }) => {
				state.loading = false;
				state.users = action.payload && action.payload.data;
			}
		);
		builder.addCase(fetchUserById.pending, (state: CounterState) => {
			state.loading = true;
		});
		builder.addCase(fetchUserById.rejected, (state: CounterState) => {
			state.loading = false;
		});
	},
});

export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;
