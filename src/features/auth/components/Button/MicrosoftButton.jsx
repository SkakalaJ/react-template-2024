/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';
import Image from 'src/components/Image';

// Assets
import MicrosoftLogo from 'src/features/auth/assets/logos/microsoft.png';

import './styles.css';

const MicrosoftButton = () => {
	return (
		<Button
			className='button-auth'
			style={{ marginLeft: '10px' }}
			onClick={() => {}}
		>
			<Box flexDirection='row'>
				<Image
					src={MicrosoftLogo}
					alt='Microsoft Logo'
					style={{
						maxWidth: '35px',
						maxHeight: '35px',
						marginLeft: '10px',
					}}
				/>
				<Text
					tag={'a'}
					text={'Microsoft'}
					style={{ color: 'black' }}
				/>
			</Box>
		</Button>
	);
};

export default MicrosoftButton;
