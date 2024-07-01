/** @format */

import { useNavigate, useLocation  } from 'react-router-dom';
// Components
import Button from 'src/shared/components/ui/Button';
import Image from 'src/shared/components/ui/Image';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import FaceIcon from 'src/features/user/assets/icons/icon-face.svg';

const ProfileSideMenuButton = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = location.pathname === '/user';

	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className={(isActive) ? 'button-side-menu-active' : 'button-side-menu-hover'}
			onClick={() => {
				navigate('/user');
			}}
		>
			<Box
				flexDirection='row'
				flex='none'
			>
				<Image
					src={FaceIcon}
					alt='Face Icon'
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
					text={'Profile'}
				/>
			</Box>
		</Button>
	);
};

export default ProfileSideMenuButton;
