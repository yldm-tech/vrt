import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/counterSlice';
import personReducer from '@/redux/personSlice';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		person: personReducer,
	},
});

export default store;
