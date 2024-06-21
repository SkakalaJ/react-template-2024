/** @format */

// Components
import SideMenu from 'src/components/SideMenu';
import Content from 'src/components/Content';
import SideMenuElements from 'src/features/user/components/SideMenu/SideMenuElements';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
	return (
		<div
			className='background-gradient'
			style={{ height: 'inherit', width: '100%', display: 'flex' }}
		>
			<SideMenu>
				<SideMenuElements />
			</SideMenu>

			<Content>
				<Outlet />
			</Content>

			{/* <Footer justifyContent='flex-end'>
				<FooterElements />
			</Footer> */}
		</div>
	);
};

export default UserLayout;
