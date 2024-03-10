/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
	name: 'home',
	initialState: {
		intro: {
			play: false,
			videoId: null,
		},
	},
	reducers: {
		playIntro: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes.
			// Also, no return statement is required from these functions.
			state.intro.play = true;
		},
		skipIntro: (state) => {
			state.intro.play = false;
		},
		setIntroVideoId: (state, action) => {
			state.intro.videoId = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { playIntro, skipIntro, setIntroVideoId } = homeSlice.actions;

export default homeSlice.reducer;
