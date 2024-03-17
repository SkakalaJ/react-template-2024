/** @format */
// Components
import Footer from 'src/components/Footer';
import Content from 'src/components/Content';

import Header from 'src/components/Header';

const AuthLayout = () => {
	const getHeaderFeatures = () => {
		return 'Header Features';
	};

	const getContentFeatures = () => {
		return 'Content Features';
	};

	const getFooterFeatures = () => {
		return 'Footer Features';
	};

	return (
		<div className='background-gradient' style={{ height: 'inherit', width: '100%' }}>
			<Header justifyContent='flex-end'>{getHeaderFeatures()}</Header>

			<Content>{getContentFeatures()}</Content>

			<Footer justifyContent='flex-end'>
				{getFooterFeatures()}
			</Footer>
		</div>
	);
};

export default AuthLayout;
