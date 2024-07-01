/** @format */

import { useState, useEffect } from 'react';
import FunTranslationsAPI from 'src/shared/lib/api-funtranslations-client';

const useTextToYodaLang = (text) => {
	const [yodaText, setYodaText] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const translateTextToYoda = async () => {
			const startTime = Date.now();

			try {
				const response = await FunTranslationsAPI.Get.translateToYoda({
					text,
				});
				setYodaText(response.contents.translated.text);
			} catch (err) {
				setError(err);
			} finally {
				const elapsedTime = Date.now() - startTime;
				const remainingTime = Math.max(0, 1000 - elapsedTime);
				setTimeout(() => setLoading(false), remainingTime);
			}
		};

		if (text) {
			translateTextToYoda();
		} else {
			setLoading(false);
		}
	}, [text]);

	return { yodaText, loading, error };
};

export default useTextToYodaLang;
