/** @format */

// useDogImage.js
import { useState, useEffect } from 'react';
import IpInfoAPI from 'src/shared/lib/api-ipapi-client';
import IpifyAPI from 'src/shared/lib/api-ipify-client';

const useYourIpInfo = () => {
	const [ipInfo, setIpInfo] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchIpInfo = async (initialIpAddress = null) => {
			const startTime = Date.now();
			try {
				let ipAddress = initialIpAddress;

				// Fetch the public IP address
				if (!ipAddress) {
					const ipifyResponse = await IpifyAPI.Get.publicIP();
					ipAddress = ipifyResponse;
				}

				// Fetch detailed IP information
				const ipApiResponse = await IpInfoAPI.Get.publicIPInfo(ipAddress);

				setIpInfo(ipApiResponse);
			} catch (err) {
				setError(err);
			} finally {
				const elapsedTime = Date.now() - startTime;
				const remainingTime = Math.max(0, 1000 - elapsedTime);
				setTimeout(() => setLoading(false), remainingTime);
			}
		};

		fetchIpInfo();
	}, []);

	return { ipInfo, loading, error };
};

export default useYourIpInfo;
