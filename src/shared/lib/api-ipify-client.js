/** @format */

import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://api.ipify.org',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default class IpifyAPI {
	static Get = {
		async publicIP() {
			try {
				const response = await axiosClient.get('?format=json');
				const publicIP = response.data.ip;
				return publicIP;
			} catch (error) {
				console.error('Error fetching public IP address:', error);
				throw error;
			}
		},
	};
}
