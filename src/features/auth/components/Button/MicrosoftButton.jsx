/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

// Assets
import MicrosoftLogo from 'src/features/auth/assets/microsoft.png';

import './styles.css';

const MicrosoftButton = () => {
	// const openGithubRepo = () => {
	// 	window.open('https://github.com/SkakalaJ/react-template-2024', '_blank');
	// };

	return (
		<Button
			className='button-auth'
			onClick={() => {
				// openGithubRepo();
			}}
		>
			<Box flexDirection='row'>
				<img
					src={MicrosoftLogo}
					alt='Microsoft Logo'
					width='32px'
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
