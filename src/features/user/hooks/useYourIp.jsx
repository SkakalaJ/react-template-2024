/** @format */

// useYourIp.js
import { useState, useEffect } from 'react';
import IpifyAPI from 'src/shared/lib/api-ipify-client';

const useYourIp = () => {
	const [ipAddress, setIpAddress] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchIpAddress = async () => {
			const startTime = Date.now();
			try {
				// Fetch the public IP address
				const response = await IpifyAPI.Get.publicIP();
				const publicIP = response.data.ip;

				setIpAddress(publicIP);
			} catch (err) {
				setError(err);
			} finally {
				const elapsedTime = Date.now() - startTime;
				const remainingTime = Math.max(0, 1000 - elapsedTime);
				setTimeout(() => setLoading(false), remainingTime);
			}
		};

		fetchIpAddress();
	}, []);

	return { ipAddress, loading, error };
};

export default useYourIp;
