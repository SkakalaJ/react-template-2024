/** @format */

// import { Fragment } from 'react';

import Box from 'src/components/Box';
import Image from 'src/components/Image';
import Text from 'src/components/Text';
import MenuHeaderBackground from 'src/features/user/assets/images/menu-header-background.svg';

const SideMenuHeaderElements = () => {
	return (
		<Box
			height='inherit'
			justifyContent='flex-start'
		>
			<Image
				src={MenuHeaderBackground}
				alt='Menu Header Background'
				style={{
					width: '240px',
					position: 'absolute',
					top: 0,
					zIndex: -1,
					flex: 'none',
				}}
			/>
			<Box
				height='125px'
				flex='none'
			>
				<Text
					tag='h2'
					style={{ color: 'white', flex: 'none' }}
					text={'React Template'}
				/>
				<Text
					tag='p'
					style={{ color: 'white', flex: 'none' }}
					text={'by Georgeo'}
				/>
			</Box>
		</Box>
	);
};

export default SideMenuHeaderElements;
