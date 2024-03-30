/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

import './styles.css';

const ResetPasswordButton = () => {
	return (
		<Button
			className='button-form'
			buttonType='submit'
		>
			<Box>
				<Text
					tag={'p'}
					text={'Reset password'}
				/>
			</Box>
		</Button>
	);
};

export default ResetPasswordButton;
