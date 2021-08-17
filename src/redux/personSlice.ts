import { createSlice } from '@reduxjs/toolkit';

export const personSlice = createSlice({
	name: 'person',
	initialState: {
		user: {
			name: 'xiaomo',
			age: 18,
		},
	},
	reducers: {},
});
export default personSlice.reducer;
