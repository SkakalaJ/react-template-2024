/** @format */
import { useSelector } from 'react-redux';

//Features
import BackgroundVideo from 'src/features/home/components/Video/BackgroundVideo';
// Components
import Footer from 'src/components/Footer';
import Content from 'src/components/Content';
import VideoCreditsText from 'src/features/home/components/Text/VideoCreditsText';

import Header from 'src/components/Header';

const AuthLayout = () => {
	return (
		<div style={{ height: 'inherit', width: '100%' }}>
			<Header justifyContent='flex-end'>aaaa</Header>

			<Content>{getContentFeature()}</Content>

			<Footer justifyContent='flex-end'>
				<VideoCreditsText />
			</Footer>
		</div>
	);
};

export default HomeLayout;
