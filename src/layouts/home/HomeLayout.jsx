/** @format */
// import { useSelector } from 'react-redux';

//Features
import BackgroundVideo from 'src/features/home/components/Video/BackgroundVideo';
// Components
import Footer from 'src/components/Footer';
import Content from 'src/components/Content';

import Header from 'src/components/Header';
import HeaderElements from 'src/features/home/components/HeaderElements';
import FooterElements from 'src/features/home/components/FooterElements';
import ContentElements from 'src/features/home/components/ContentElements';

const HomeLayout = () => {
	return (
		<div style={{ height: 'inherit', width: '100%' }}>
			<BackgroundVideo />

			<Header justifyContent='flex-end'>
				<HeaderElements />
			</Header>

			<Content>
				<ContentElements />
			</Content>

			<Footer justifyContent='flex-end'>
				<FooterElements />
			</Footer>
		</div>
	);
};

export default HomeLayout;
