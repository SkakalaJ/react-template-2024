/** @format */

// useDogImage.js
import { useState, useEffect, useCallback } from 'react';
import DogCeoAPI from 'src/shared/lib/api-dog.ceo-client';

const useDogImage = () => {
	const [dogImage, setDogImage] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [reload, setReload] = useState(false);

	const fetchDogImage = useCallback(async () => {
		const startTime = Date.now();
		try {
			const dogImage = await DogCeoAPI.Get.randomDogImage();
			setDogImage(dogImage);
		} catch (err) {
			setError(err);
		} finally {
			const elapsedTime = Date.now() - startTime;
			const remainingTime = Math.max(0, 1000 - elapsedTime);
			setTimeout(() => setLoading(false), remainingTime);
		}
	}, []);

	// useEffect to fetch dog image
	useEffect(() => {
		setLoading(true);
		fetchDogImage();
	}, [fetchDogImage, reload]);

	// Function to force reload
	const forceReload = () => setReload(prev => !prev);

	return { dogImage, loading, error, forceReload };
};

export default useDogImage;
