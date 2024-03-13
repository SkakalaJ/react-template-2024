/** @format */

import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'src/features/home/reducers/homeSlice';

export default configureStore({
	reducer: {
		home: homeReducer,
	},
});
