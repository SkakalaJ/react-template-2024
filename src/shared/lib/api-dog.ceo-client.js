/** @format */

import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://dog.ceo/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default class DogCeoAPI {
	static Get = {
		async randomDogImage() {
			try {
				const response = await axiosClient.get('/breeds/image/random');
				const dogImage = response.data.message;
				return dogImage;
			} catch (error) {
				console.error('Error fetching dog image:', error);
				throw error;
			}
		},
	};
}
