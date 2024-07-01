/** @format */

import { useNavigate, useLocation } from 'react-router-dom';

// Components
import Button from 'src/shared/components/ui/Button';
import Image from 'src/shared/components/ui/Image';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import APIIcon from 'src/features/user/assets/icons/icon-api.svg';

const RandomAPIsSideMenuButton = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = location.pathname.endsWith('/random-apis');

	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className={(isActive) ? 'button-side-menu-active' : 'button-side-menu-hover'}
			onClick={() => {
				navigate('random-apis');
			}}
		>
			<Box
				flexDirection='row'
				flex='none'
			>
				<Image
					src={APIIcon}
					alt='API Icon'
					style={{
						width: '30px',
						height: '30px',
						marginRight: '10px',
						flex: 'none',
					}}
				/>
				<Text
					tag='p'
					style={{ flex: 'none' }}
					text={'Random APIs'}
				/>
			</Box>
		</Button>
	);
};

export default RandomAPIsSideMenuButton;
