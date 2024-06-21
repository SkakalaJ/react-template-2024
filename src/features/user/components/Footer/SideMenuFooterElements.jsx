/** @format */

import Image from 'src/components/Image';
import MenuHeaderBackground from 'src/features/user/assets/images/menu-header-background.svg';
import GithubSideMenuButton from 'src/features/user/components/Button/GithubSideMenuButton';
import Box from 'src/components/Box';

const SideMenuFooterElements = () => {
	return (
		<Box
			height='inherit'
			justifyContent='flex-end'
		>
			<Image
				src={MenuHeaderBackground}
				alt='Menu Header Background'
				style={{
					width: '240px',
					position: 'absolute',
					bottom: 0,
					transform: 'rotate(180deg)',
					flex: 'none',
				}}
			/>
			<Box
				height='125px'
				flex='none'
			>
				<GithubSideMenuButton />
			</Box>
		</Box>
	);
};

export default SideMenuFooterElements;
