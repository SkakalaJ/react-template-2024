/** @format */

import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'src/features/home/reducers/homeSlice';
import userReducer from 'src/features/user/reducers/userSlice';

const store = configureStore({
	reducer: {
		home: homeReducer,
		user: userReducer,
	},
});

let currentIntroPlayState = store.getState().home.intro.play;
let currentUserSession = store.getState().user.session;

const handleChange = () => {
	handleIntroPlayState();
	handleUserSession();
};

store.subscribe(handleChange);

export default store;

/**
 * Handle functions for store subscription
 */
const handleIntroPlayState = () => {
	const previousIntroPlayState = currentIntroPlayState;
	currentIntroPlayState = store.getState().home.intro.play;

	if (previousIntroPlayState !== currentIntroPlayState) {
		localStorage.setItem('intro', currentIntroPlayState);
	}
};

const handleUserSession = () => {
	console.log('USER SESSION CHANGED');

	const previousUserSession = currentUserSession;
	currentUserSession = store.getState().user.session;

	if (previousUserSession !== currentUserSession) {
		localStorage.setItem('user', JSON.stringify(currentUserSession));
	}
};
