/** @format */
// import { useSelector } from 'react-redux';

//Features
import BackgroundVideo from 'src/features/home/components/Video/BackgroundVideo';
// Components
import Footer from 'src/shared/components/layout/Footer';
import Content from 'src/shared/components/layout/Content';

import Header from 'src/shared/components/layout/Header';
import HeaderElements from 'src/features/home/components/Header/HeaderElements';
import FooterElements from 'src/features/home/components/Footer/FooterElements';
import ContentElements from 'src/features/home/components/Content/ContentElements';

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
