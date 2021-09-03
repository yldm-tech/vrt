import { configureStore } from '@reduxjs/toolkit';
import personReducer from '@/redux/personSlice';

const store = configureStore({
	reducer: {
		person: personReducer,
	},
});

export default store;
