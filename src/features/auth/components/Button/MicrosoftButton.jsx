/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

// Assets
import MicrosoftLogo from 'src/features/auth/assets/logos/microsoft.png';

import './styles.css';

const MicrosoftButton = () => {
	// const openGithubRepo = () => {
	// 	window.open('https://github.com/SkakalaJ/react-template-2024', '_blank');
	// };

	return (
		<Button
			className='button-auth'
			style={{ marginLeft: '10px' }}
			onClick={() => {
				// openGithubRepo();
			}}
		>
			<Box flexDirection='row'>
				<img
					display='block'
					src={MicrosoftLogo}
					alt='Microsoft Logo'
					style={{
						maxWidth: '35px',
						maxHeight: '35px',
						objectFit: 'contain',
						marginLeft: '10px',
					}}
				/>
				<Text
					tag={'a'}
					text={'Microsoft'}
				/>
			</Box>
		</Button>
	);
};

export default MicrosoftButton;
