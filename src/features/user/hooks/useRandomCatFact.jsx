/** @format */

// useCatFact.js
import { useState, useEffect, useCallback } from 'react';
import CatFactNinjaAPI from 'src/shared/lib/api-catfact.ninja-client';

const useCatFact = () => {
	const [catFact, setCatFact] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [reload, setReload] = useState(false);

	const fetchCatFact = useCallback(async () => {
		const startTime = Date.now();
		try {
			const catFact = await CatFactNinjaAPI.Get.randomCatFact();
			setCatFact(catFact);
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
		fetchCatFact();
	}, [fetchCatFact, reload]);

	// Function to force reload
	const forceReload = () => setReload(prev => !prev);

	return { catFact, loading, error, forceReload };
};

export default useCatFact;
