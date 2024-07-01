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

	static encodePngToBase64(binary){
		return `data:image/png;base64,${btoa(
			new Uint8Array(binary).reduce((data, byte) => data + String.fromCharCode(byte), '')
		)}`;
	}
}
