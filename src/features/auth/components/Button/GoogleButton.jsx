/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

// Assets
import GoogleLogo from 'src/features/auth/assets/google.png';

import './styles.css';

const GoogleButton = () => {
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
					src={GoogleLogo}
					alt='Google Logo'
				/>
				<Text
					tag={'a'}
					text={'Google'}
				/>
			</Box>
		</Button>
	);
};

export default GoogleButton;
