/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		session: localStorage.getItem('user'),
		showHomePage: localStorage.getItem('user') ? false : true,
	},
	reducers: {
		setUserSession: (state, action) => {
			state.session = action.payload;
		},
		setShowHomePage: (state, action) => {
			state.session.showHomePage = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUserSession } = userSlice.actions;

export default userSlice.reducer;
