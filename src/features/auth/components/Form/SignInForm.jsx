/** @format */

import Box from 'src/components/Box';
import Form from 'src/components/Form';
import MobileOrEmailInput from 'src/features/auth/components/Input/MobileOrEmailInput';
import PasswordInput from 'src/features/auth/components/Input/PasswordInput';
import ForgotPasswordButton from 'src/features/auth/components/Button/ForgotPasswordButton';
import SignInButton from 'src/features/auth/components/Button/SignInButton';

const SignInForm = () => {
	return (
		<Form
			onFormSubmit={(e) => {
				console.log('Form Submitted');
			}}
		>
			<Box style={{ marginBottom: '10px' }}>
				<MobileOrEmailInput />
			</Box>
			<Box style={{ marginBottom: '5px' }}>
				<PasswordInput />
			</Box>

			<Box
				alignItems='flex-end'
				style={{ marginBottom: '10px' }}
			>
				<ForgotPasswordButton />
			</Box>

			<Box>
				<SignInButton />
			</Box>
		</Form>
	);
};

export default SignInForm;
