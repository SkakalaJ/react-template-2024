/** @format */

// Components
import Button from 'src/shared/components/ui/Button';
import Text from 'src/shared/components/ui/Text';
import Box from 'src/shared/components/layout/Box';

import './styles.css';

const RegisterButton = () => {
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
