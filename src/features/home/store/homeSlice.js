/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
	name: 'home',
	initialState: {
		intro: {
			play: localStorage.getItem('intro') === 'false' ? false : true,
			videoId: null,
		},
	},
	reducers: {
		playIntro: (state) => {
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
