/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

import './styles.css';

const SetNewPasswordButton = () => {
	return (
		<Button
			className='button-form'
			buttonType='submit'
		>
			<Box>
				<Text
					tag={'p'}
					text={'Set new password'}
				/>
			</Box>
		</Button>
	);
};

export default SetNewPasswordButton;
