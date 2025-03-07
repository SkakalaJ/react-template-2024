/** @format */

import { useSelector } from 'react-redux';
import { Fragment } from 'react';

// Components
import PlayIntroButton from 'src/features/home/components/Button/PlayIntroButton';
import SkipIntroButton from 'src/features/home/components/Button/SkipIntroButton';
import AuthorCreditsText from 'src/features/home/components/Text/AuthorCreditsText';
import VideoCreditsText from 'src/features/home/components/Text/VideoCreditsText';

const FooterElements = () => {
	const intro = useSelector((state) => state.home.intro);

	const getFooterFeatures = () => {
		if (intro.play) {
			return <SkipIntroButton />;
		}

		return <PlayIntroButton />;
	};

	return (
		<Fragment>
			<AuthorCreditsText />
			<VideoCreditsText />
			{getFooterFeatures()}
		</Fragment>
	);
};

export default FooterElements;
