/** @format */
import { Fragment, useState } from 'react';
import Input from 'src/components/Input';
import PasswordVisibilityButton from 'src/features/auth/components/Button/PasswordVisibilityButton';

const NewPasswordInput = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	const validation = (value) => {
		return value;
	};

	return (
		<Fragment>
			<Input
				isRequired
				style={{ paddingRight: '40px' }}
				type={passwordVisibility ? 'text' : 'password'}
				placeholder='New password'
				name='newPassword'
				onInvalid={(e) => {
					e.target.setCustomValidity(validation(e.target.value));
				}}
			/>
			<PasswordVisibilityButton
				onClick={(isPasswordVisible) =>
					setPasswordVisibility(isPasswordVisible)
				}
			/>
		</Fragment>
	);
};

export default NewPasswordInput;
