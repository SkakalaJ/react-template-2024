/**
 * DISCLAIMER:
 * The following code is sourced from the website www.geeksforgeeks.org, specifically from the article available at:
 * https://www.geeksforgeeks.org/reactjs-uselocalstorage-custom-hook/
 *
 * This code is provided "as is" without any warranties or guarantees of any kind, either express or implied,
 * including but not limited to the implied warranties of merchantability and fitness for a particular purpose.
 * The original content is the intellectual property of GeeksforGeeks and is used here solely for educational
 * and illustrative purposes. Any modifications or use of this code should adhere to the licensing terms provided
 * by GeeksforGeeks. The user assumes full responsibility for any consequences resulting from the use of this code.
 *
 * @format
 */

import { useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
	// Create state variable to store
	// localStorage value in state
	const [localStorageValue, setLocalStorageValue] = useState(() => {
		try {
			const value = localStorage.getItem(key);
			// If value is already present in
			// localStorage then return it

			// Else set default value in
			// localStorage and then return it
			if (value) {
				return JSON.parse(value);
			} else {
				localStorage.setItem(key, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch (error) {
			localStorage.setItem(key, JSON.stringify(defaultValue));
			return defaultValue;
		}
	});

	// this method update our localStorage and our state
	const setLocalStorageStateValue = (valueOrFn) => {
		let newValue;
		if (typeof valueOrFn === 'function') {
			const fn = valueOrFn;
			newValue = fn(localStorageValue);
		} else {
			newValue = valueOrFn;
		}
		localStorage.setItem(key, JSON.stringify(newValue));
		setLocalStorageValue(newValue);
	};
	return [localStorageValue, setLocalStorageStateValue];
};

export const clearLocalStorage = () => {
	localStorage.clear();
};

export const removeLocalStorageItem = (key) => {
	localStorage.removeItem(key);
};

export default useLocalStorage;
