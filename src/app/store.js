/** @format */

import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'src/features/Home/homeSlice';

export default configureStore({
	reducer: {
		home: homeReducer,
	},
});
