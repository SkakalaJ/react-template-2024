/** @format */

// Components
import Button from 'src/shared/components/ui/Button';
import Text from 'src/shared/components/ui/Text';
import Box from 'src/shared/components/layout/Box';
import Image from 'src/shared/components/ui/Image';

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
