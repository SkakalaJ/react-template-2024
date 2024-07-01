/** @format */

import { useNavigate,useLocation } from 'react-router-dom';

// Components
import Button from 'src/shared/components/ui/Button';
import Image from 'src/shared/components/ui/Image';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import IconHeart from 'src/features/user/assets/icons/icon-heart.svg';

const SpecialThanksSideMenuButton = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = location.pathname.endsWith('/special-thanks');

	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className={(isActive) ? 'button-side-menu-active' : 'button-side-menu-hover'}
			onClick={() => {
				navigate('special-thanks');
			}}
		>
			<Box
				flexDirection='row'
				flex='none'
			>
				<Image
					src={IconHeart}
					alt='Icon Heart'
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
					text={'Special Thanks'}
				/>
			</Box>
		</Button>
	);
};

export default SpecialThanksSideMenuButton;
