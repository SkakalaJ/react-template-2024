/** @format */

import { createSlice } from '@reduxjs/toolkit';
import {
	LOCAL_STORAGE_USER,
	LOCAL_STORAGE_SHOW_HOME_PAGE,
} from 'src/app/store/consts/localStorage';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: localStorage.getItem(LOCAL_STORAGE_USER),
		showHomePage: localStorage.getItem(LOCAL_STORAGE_SHOW_HOME_PAGE)
			? false
			: true,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setShowHomePage: (state, action) => {
			state.showHomePage = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser, setShowHomePage } = userSlice.actions;

export default userSlice.reducer;
