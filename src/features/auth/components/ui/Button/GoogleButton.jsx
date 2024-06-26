/** @format */

// Components
import Button from 'src/shared/components/ui/Button';
import Text from 'src/shared/components/ui/Text';
import Box from 'src/shared/components/layout/Box';
import Image from 'src/shared/components/ui/Image';

// Assets
import GoogleLogo from 'src/features/auth/assets/logos/google.png';

import './styles.css';

const GoogleButton = () => {
	return (
		<Button
			className='button-auth'
			style={{ marginRight: '10px' }}
			onClick={() => {}}
		>
			<Box flexDirection='row'>
				<Image
					src={GoogleLogo}
					alt='Google Logo'
					style={{
						maxWidth: '35px',
						maxHeight: '35px',
						marginLeft: '10px',
					}}
				/>
				<Text
					tag={'a'}
					text={'Google'}
					style={{ color: 'black' }}
				/>
			</Box>
		</Button>
	);
};

export default GoogleButton;
