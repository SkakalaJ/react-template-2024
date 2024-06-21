/** @format */

import { useNavigate } from 'react-router-dom';
import Box from 'src/components/Box';
import Form from 'src/components/Form';
import MobileOrEmailInput from 'src/features/auth/components/Input/MobileOrEmailInput';
import PasswordInput from 'src/features/auth/components/Input/PasswordInput';
import ForgotPasswordLink from 'src/features/auth/components/Link/ForgotPasswordLink';
import SignInButton from 'src/features/auth/components/Button/SignInButton';
import validator from 'validator';
import useLocalStorage from 'src/hooks/useLocalStorage';

const SignInForm = () => {
	const navigate = useNavigate();
	const [, setUser] = useLocalStorage('user', null);

	const onFormSuccess = (mobileOrEmail, password) => {
		const isEmail = validator.isEmail(mobileOrEmail);
		const isMobile = validator.isMobilePhone(mobileOrEmail, 'any');

		const email = isEmail ? mobileOrEmail : null;
		const mobile = isMobile ? mobileOrEmail : null;

		console.log('Mobile:', mobile);
		console.log('Email:', email);
		console.log('Password:', password);

		const info = {
			email,
			mobile,
		};

		const tokens = {
			access: '1RC9oLBwg9bUXBSUda28zPs6Ej4I6XBG', // random access token
			refresh: '9lSdJCrl1Fq2ughfdRZ0WfTaOOoguezF', // random refresh token
		};

		setUser({
			info,
			tokens,
			showHomePage: false,
		});

		navigate('/');
	};

	return (
		<Form
			onFormSubmit={(e) => {
				onFormSuccess(e.target.mobileOrEmail.value, e.target.password.value);
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
				<ForgotPasswordLink />
			</Box>

			<Box>
				<SignInButton />
			</Box>
		</Form>
	);
};

export default SignInForm;
