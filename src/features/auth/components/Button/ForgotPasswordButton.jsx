/** @format */

// Components
import Button from 'src/components/Button';

import ForgotPasswordText from '../Text/ForgotPasswordText';

const ForgotPasswordButton = () => {
	return (
		<Button
			className=''
			onClick={() => {
				console.log('Forgot password button clicked');
			}}
		>
			<ForgotPasswordText />
		</Button>
	);
};

export default ForgotPasswordButton;
