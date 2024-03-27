/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

import './styles.css';

const RegisterButton = () => {
	// const openGithubRepo = () => {
	// 	window.open('https://github.com/SkakalaJ/react-template-2024', '_blank');
	// };

	return (
		<Button
			className='button-form'
			buttonType='submit'
		>
			<Box>
				<Text
					tag={'p'}
					text={'Register'}
				/>
			</Box>
		</Button>
	);
};

export default RegisterButton;
