/** @format */

// Components
import SideMenu from 'src/shared/components/layout/SideMenu';
import Content from 'src/shared/components/layout/Content';
import SideMenuElements from 'src/features/user/components/SideMenu/SideMenuElements';
import { Outlet } from 'react-router-dom';
import { useLoading } from 'src/shared/contexts/loadingContext';
import SphereLoader from 'src/shared/components/animations/SphereLoader';

const UserLayout = () => {
	const { loading } = useLoading();

	if (loading) {
		return <SphereLoader />;
	}

	return (
		<div
			className='background-gradient'
			style={{ height: 'inherit', width: '100%', display: 'flex' }}
		>
			<SideMenu>
				<SideMenuElements />
			</SideMenu>

			<Content
				style={{
					justifyContent: 'flex-start',
					overflow: 'hidden',
					width: '100%',
					overflowY: 'auto'
				}}
			>
				<Outlet />
			</Content>

			{/* <Footer justifyContent='flex-end'>
				<FooterElements />
			</Footer> */}
		</div>
	);
};

export default UserLayout;
