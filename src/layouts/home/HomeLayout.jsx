/** @format */
import { useSelector } from 'react-redux';

//Features
import BackgroundVideo from 'src/features/home/components/BackgroundVideo';
// Components
import Footer from 'src/components/Footer';
import Content from 'src/components/Content';
import VideoCreditsText from 'src/features/home/components/VideoCreditsText';

import Header from 'src/components/Header';
import QuoteText from 'src/features/home/components/QuoteText';
import SkipIntroButton from 'src/features/home/components/SkipIntroButton';
import PlayIntroButton from 'src/features/home/components/PlayIntroButton';

const HomeLayout = () => {
	const intro = useSelector((state) => state.home.intro);

	const getHeaderFeature = () => {
		if (intro.play) {
			return <SkipIntroButton />;
		}

		return <PlayIntroButton />;
	};

	const getContentFeature = () => {
		if (intro.play) {
			return <QuoteText />;
		}

		// return 'Main Layout';
	};

	return (
		<div style={{ height: 'inherit', width: '100%' }}>
			<BackgroundVideo />

			<Header justifyContent='flex-end'>{getHeaderFeature()}</Header>

			<Content>{getContentFeature()}</Content>

			<Footer justifyContent='flex-end'>
				<VideoCreditsText />
			</Footer>
		</div>
	);
};

export default HomeLayout;
