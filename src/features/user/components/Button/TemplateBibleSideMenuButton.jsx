/** @format */

import { useNavigate, useLocation } from 'react-router-dom';

// Components
import Button from 'src/shared/components/ui/Button';
import Image from 'src/shared/components/ui/Image';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import BookHeartIcon from 'src/features/user/assets/icons/icon-book-heart-love.svg';

const TemplateBibleSideMenuButton = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = location.pathname.endsWith('/template-bible');

	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className={(isActive) ? 'button-side-menu-active' : 'button-side-menu-hover'}
			onClick={() => {
				navigate('template-bible');
			}}
		>
			<Box
				flexDirection='row'
				flex='none'
			>
				<Image
					src={BookHeartIcon}
					alt='Book Heart Icon'
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
					text={'Template Bible'}
				/>
			</Box>
		</Button>
	);
};

export default TemplateBibleSideMenuButton;
