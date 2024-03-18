/** @format */
// Components
import Footer from 'src/components/Footer';
import Content from 'src/components/Content';
import { Outlet } from 'react-router-dom';

import Header from 'src/components/Header';
import HeaderElements from 'src/features/auth/components/Header/HeaderElements';
import FooterElements from 'src/features/auth/components/Footer/FooterElements';

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
				<Outlet />
			</Content>

			<Footer justifyContent='flex-end'>
				<FooterElements />
			</Footer>
		</div>
	);
};

export default AuthLayout;
