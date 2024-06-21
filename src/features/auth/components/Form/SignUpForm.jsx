/** @format */

import Box from 'src/components/Box';
import Form from 'src/components/Form';
import MobileOrEmailSignUpInput from 'src/features/auth/components/Input/MobileOrEmailSignUpInput';
import NewPasswordInput from 'src/features/auth/components/Input/NewPasswordInput';
import FirstNameInput from 'src/features/auth/components/Input/FirstNameInput';
import LastNameInput from 'src/features/auth/components/Input/LastNameInput';
import RegisterButton from 'src/features/auth/components/Button/RegisterButton';

const SignUpForm = () => {
	const onFirstName = (value) => {
		console.log('First Name:', value);
	};

	const onLastName = (value) => {
		console.log('Last Name:', value);
	};

	const onMobileOrEmail = (value) => {
		console.log('Mobile or Email:', value);
	};

	const onNewPassword = (value) => {
		console.log('New Password:', value);
	};

	return (
		<Form
			onFormSubmit={(e) => {
				onFirstName(e.target.firstName.value);
				onLastName(e.target.lastName.value);
				onMobileOrEmail(e.target.mobileOrEmail.value);
				onNewPassword(e.target.newPassword.value);
			}}
		>
			<Box
				flexDirection='row'
				style={{ marginBottom: '10px' }}
			>
				<FirstNameInput />
				<LastNameInput />
			</Box>
			<Box style={{ marginBottom: '10px' }}>
				<MobileOrEmailSignUpInput />
			</Box>
			<Box style={{ marginBottom: '10px' }}>
				<NewPasswordInput />
			</Box>

			<Box>
				<RegisterButton />
			</Box>
		</Form>
	);
};

export default SignUpForm;
