/** @format */

import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'src/features/home/store/homeSlice';
import userReducer from 'src/features/user/store/userSlice';
import {
	LOCAL_STORAGE_INTRO,
	LOCAL_STORAGE_USER,
	LOCAL_STORAGE_SHOW_HOME_PAGE,
} from 'src/app/store/consts/localStorage';

const store = configureStore({
	reducer: {
		home: homeReducer,
		user: userReducer,
	},
});

// toto treba este izolovat a upravit
let currentIntroPlayState = store.getState().home.intro.play;
let currentShowHomePage = store.getState().user.showHomePage;
let currentUser = store.getState().user.user;

const handleChange = () => {
	handleIntroChange();
	handleUserChange();
	handleShowHomePageChange();
};

store.subscribe(handleChange);

export default store;

/**
 * Handle functions for store subscription
 */
const handleIntroChange = () => {
	const previousIntroPlayState = currentIntroPlayState;
	currentIntroPlayState = store.getState().home.intro.play;

	if (previousIntroPlayState !== currentIntroPlayState) {
		localStorage.setItem(LOCAL_STORAGE_INTRO, currentIntroPlayState);
	}
};

const handleUserChange = () => {
	const previousUser = currentUser;
	currentUser = store.getState().user.user;

	if (previousUser !== currentUser) {
		localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(currentUser));
	}
};

const handleShowHomePageChange = () => {
	const previousShowHomePage = currentShowHomePage;
	currentShowHomePage = store.getState().user.showHomePage;

	if (previousShowHomePage !== currentShowHomePage) {
		localStorage.setItem(
			LOCAL_STORAGE_SHOW_HOME_PAGE,
			JSON.stringify(currentShowHomePage),
		);
	}
};
