/** @format */

import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://robohash.org',
	headers: {
		'Content-Type': 'application/json',
	},
  responseType: 'arraybuffer',
});

export default class RobohashAPI {
	static Get = {
		async generateAvatar(hash = null) {

			try {
				const response = await axiosClient.get('/' + hash + '.png');
				return response;
			} catch (error) {
				console.error('Error fetching avatar:', error);
				throw error;
			}
		},
	};
}
