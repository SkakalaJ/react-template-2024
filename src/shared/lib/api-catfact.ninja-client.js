/** @format */

import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://catfact.ninja',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default class CatFactNinjaAPI {
	static Get = {
		async randomCatFact() {
			try {
				const response = await axiosClient.get('/fact');
				const catFact = response.data.fact;
				return catFact;
			} catch (error) {
				console.error('Error fetching cat fact:', error);
				throw error;
			}
		},
	};
}
