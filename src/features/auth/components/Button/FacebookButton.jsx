/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

// Assets
import FacebookLogo from 'src/features/auth/assets/facebook.png';

import './styles.css';

const FacebookButton = () => {
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
					src={FacebookLogo}
					alt='Facebook Logo'
					width='32px'
				/>
				<Text
					tag={'a'}
					text={'Facebook'}
				/>
			</Box>
		</Button>
	);
};

export default FacebookButton;
