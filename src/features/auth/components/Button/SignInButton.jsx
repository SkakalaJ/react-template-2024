/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

import './styles.css';

const SignInButton = () => {
	// const openGithubRepo = () => {
	// 	window.open('https://github.com/SkakalaJ/react-template-2024', '_blank');
	// };

	return (
		<Button
			className='button-form'
			onClick={() => {
				// openGithubRepo();
			}}
		>
			<Box>
				<Text
					tag={'p'}
					text={'Sign in'}
				/>
			</Box>
		</Button>
	);
};

export default SignInButton;
