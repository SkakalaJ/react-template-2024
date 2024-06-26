/** @format */

import { useNavigate } from 'react-router-dom';

// Components
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import BookHeartIcon from 'src/features/user/assets/images/icon-book-heart-love.svg';

const TemplateBibleSideMenuButton = () => {
	const navigate = useNavigate();

	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className='button-side-menu-hover'
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
