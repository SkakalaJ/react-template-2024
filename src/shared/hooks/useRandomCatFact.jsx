/** @format */

// useCatFact.js
import { useState, useEffect } from 'react';
import apiCatFactClient from 'src/shared/lib/api-catfact-client';

const useCatFact = () => {
	const [catFact, setCatFact] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCatFact = async () => {
			try {
				const response = await apiCatFactClient.get('/fact');
				setCatFact(response.data.fact);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchCatFact();
	}, []);

	return { catFact, loading, error };
};

export default useCatFact;
