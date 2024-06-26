/** @format */

import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://catfact.ninja',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getRandomCatFact = async () => {
	try {
		const response = await axiosClient.get('/fact');
		const catFact = response.data.fact;
		console.log('Random Cat Fact:', catFact);
		return catFact;
	} catch (error) {
		console.error('Error fetching cat fact:', error);
		throw error;
	}
};

export default axiosClient;
