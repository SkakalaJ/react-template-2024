/** @format */

import { useSelector } from 'react-redux';
import { Fragment } from 'react';

// Components
import QuoteText from 'src/features/home/components/Text/QuoteText';

const ContentElements = () => {
	const intro = useSelector((state) => state.home.intro);

	const getContentFeatures = () => {
		if (intro.play) {
			return <QuoteText />;
		}

		// return 'Main Layout';
	};

	return <Fragment>{getContentFeatures()}</Fragment>;
};

export default ContentElements;
