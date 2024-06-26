/** @format */

// Components
import Button from 'src/shared/components/ui/Button';
import Text from 'src/shared/components/ui/Text';
import Box from 'src/shared/components/layout/Box';

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
