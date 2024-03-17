/** @format */
// Components
import Footer from 'src/components/Footer';
import Content from 'src/components/Content';

import Header from 'src/components/Header';
import HeaderElements from 'src/features/auth/components/HeaderElements';
import ContentElements from 'src/features/auth/components/ContentElements';
import FooterElements from 'src/features/auth/components/FooterElements';

const AuthLayout = () => {
	return (
		<div
			className='background-gradient'
			style={{ height: 'inherit', width: '100%' }}
		>
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

export default AuthLayout;
