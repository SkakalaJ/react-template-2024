/** @format */

export default class Utils {
	// Get local storage item
	static getLocalStorageItem(key, defaultValue) {
		const value = localStorage.getItem(key);
		if (value === null || value === 'null') {
			return defaultValue;
		}

		if (value === undefined || value === 'undefined') {
			return defaultValue;
		}

		return JSON.parse(value);
	}
}
