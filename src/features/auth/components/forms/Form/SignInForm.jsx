/** @format */

import { useNavigate } from 'react-router-dom';
import Box from 'src/shared/components/layout/Box';
import Form from 'src/shared/components/forms/Form';
import MobileOrEmailInput from 'src/features/auth/components/forms/Input/MobileOrEmailInput';
import PasswordInput from 'src/features/auth/components/forms/Input/PasswordInput';
import ForgotPasswordLink from 'src/features/auth/components/ui/Link/ForgotPasswordLink';
import SignInButton from 'src/features/auth/components/ui/Button/SignInButton';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { setShowHomePage, setUser } from 'src/features/user/store/userSlice';

const SignInForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onFormSuccess = (mobileOrEmail, password) => {
		const isEmail = validator.isEmail(mobileOrEmail);
		const isMobile = validator.isMobilePhone(mobileOrEmail, 'any');

		const email = isEmail ? mobileOrEmail : null;
		const mobile = isMobile ? mobileOrEmail : null;

		dispatch(
			setUser({
				email,
				mobile,
			}),
		);

		setShowHomePage(false);

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
