/** @format */

// Components
import Button from 'src/components/Button';

import ForgotPasswordText from '../Text/ForgotPasswordText';

const ForgotPasswordButton = () => {
	return (
		<Button
			elementType='div'
			className=''
			style={{ border: 'none', background: 'transparent' }}
			onClick={() => {
				console.log('Forgot password button clicked');
			}}
		>
			<ForgotPasswordText />
		</Button>
	);
};

export default ForgotPasswordButton;
