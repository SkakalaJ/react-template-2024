/** @format */

import { useState, useEffect } from 'react';
import RobohashAPI from 'src/shared/lib/api.robohash-client';
import Utils from 'src/shared/utils/utils';

const useRobohashImage = (hash) => {
	const [avatar, setAvatarHash] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getAvatarImage = async () => {
			const startTime = Date.now();

			try {
				const response = await RobohashAPI.Get.generateAvatar(hash);
        const base64Image = Utils.encodePngToBase64(response.data);
				setAvatarHash(base64Image);
			} catch (err) {
				setError(err);
			} finally {
				const elapsedTime = Date.now() - startTime;
				const remainingTime = Math.max(0, 1000 - elapsedTime);
				setTimeout(() => setLoading(false), remainingTime);
			}
		};

		if (hash) {
			getAvatarImage();
		} else {
			setLoading(false);
		}
	}, [hash]);

	return { avatar, loading, error };
};

export default useRobohashImage;
