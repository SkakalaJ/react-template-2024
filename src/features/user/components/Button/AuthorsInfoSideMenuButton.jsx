/** @format */

import { useNavigate } from 'react-router-dom';

// Components
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import IconDesignerArtist from 'src/features/user/assets/images/icon-designer-artist.svg';

const AuthorsInfoSideMenuButton = () => {
	const navigate = useNavigate();

	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className='button-side-menu-hover'
			onClick={() => {
				navigate('/author');
			}}
		>
			<Box
				flexDirection='row'
				flex='none'
			>
				<Image
					src={IconDesignerArtist}
					alt='Icon Designer Artist'
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
					text={'Author\'s Info'}
				/>
			</Box>
		</Button>
	);
};

export default AuthorsInfoSideMenuButton;
