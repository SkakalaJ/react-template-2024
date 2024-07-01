/** @format */

import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'http://ip-api.com',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default class IpInfoAPI {
	static Get = {
		async publicIPInfo(ipAddress = null) {
			try {
				// Fetch detailed IP information
				const ipApiResponse = await axiosClient.get(`/json/${ipAddress}`);
				const ipInfo = ipApiResponse.data;
				return ipInfo;
			} catch (error) {
				console.error('Error fetching IP information:', error);
				throw error;
			}
		},
	};
}
