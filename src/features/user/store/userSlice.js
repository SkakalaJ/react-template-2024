/** @format */

import { createSlice } from '@reduxjs/toolkit';
import {
	LOCAL_STORAGE_USER,
	LOCAL_STORAGE_SHOW_HOME_PAGE,
} from 'src/app/store/consts/localStorage';
import Utils from 'src/shared/utils/utils';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: Utils.getLocalStorageItem(LOCAL_STORAGE_USER, null),
		showHomePage: Utils.getLocalStorageItem(LOCAL_STORAGE_SHOW_HOME_PAGE, true),
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
