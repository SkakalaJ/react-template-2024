/** @format */

import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://api.funtranslations.com',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default class FunTranslationsAPI {
	static Get = {
		async translateToYoda(text = null) {
			try {
				const response = await axiosClient.get('/translate/yoda.json', {
					params: { text: text },
				});
				const translatedText = response.data;
				return translatedText;
			} catch (error) {
				console.error('Error translating text to Yoda-speak:', error);
				throw error;
			}
		},
	};
}
