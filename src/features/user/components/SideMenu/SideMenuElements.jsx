/** @format */

import { Fragment } from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from 'src/components/Box';
import SideMenuFooterElements from 'src/features/user/components/Footer/SideMenuFooterElements';
import SideMenuHeaderElements from 'src/features/user/components/Header/SideMenuHeaderElements';
import GoToHomePageSideMenuButton from '../Button/GoToHomePageSideMenuButton';
import UserLogoutSideMenuButton from '../Button/UserLogoutSideMenuButton';
import RandomAPIsSideMenuButton from '../Button/RandomAPIsSideMenuButton';
import ProfileSideMenuButton from '../Button/ProfileSideMenuButton';
import AuthorsInfoSideMenuButton from '../Button/AuthorsInfoSideMenuButton';
import TemplateBibleSideMenuButton from '../Button/TemplateBibleSideMenuButton';

const SideMenuElements = () => {
	return (
		<Fragment>
			<Header
				height='208px'
				width='inherit'
				position='relative'
			>
				<SideMenuHeaderElements />
			</Header>

			<Box
				flex={1}
				justifyContent='space-between'
				style={{ padding: '10px 0' }}
			>
				<Box flex='none'>
					<ProfileSideMenuButton />
					<RandomAPIsSideMenuButton />
					<TemplateBibleSideMenuButton />
					<AuthorsInfoSideMenuButton />
				</Box>
				<Box flex='none'>
					<GoToHomePageSideMenuButton />
					<UserLogoutSideMenuButton />
				</Box>
			</Box>

			<Footer
				height='208px'
				width='inherit'
				position='relative'
			>
				<SideMenuFooterElements />
			</Footer>
		</Fragment>
	);
};

export default SideMenuElements;
