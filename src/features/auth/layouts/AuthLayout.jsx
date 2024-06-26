/** @format */
// Components
import Footer from 'src/shared/components/layout/Footer';
import Content from 'src/shared/components/layout/Content';
import { Outlet } from 'react-router-dom';

import Header from 'src/shared/components/layout/Header';
import HeaderElements from 'src/features/auth/components/layout/Header/HeaderElements';
import FooterElements from 'src/features/auth/components/layout/Footer/FooterElements';

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
