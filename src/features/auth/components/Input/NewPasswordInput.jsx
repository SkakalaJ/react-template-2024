/** @format */
import { Fragment, useState } from 'react';
import Input from 'src/components/Input';
import PasswordVisibilityButton from 'src/features/auth/components/Button/PasswordVisibilityButton';

const NewPasswordInput = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	return (
		<Fragment>
			<Input
				style={{ paddingRight: '40px' }}
				type={passwordVisibility ? 'text' : 'password'}
				placeholder='New password'
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
