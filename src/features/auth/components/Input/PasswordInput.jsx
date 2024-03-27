/** @format */
import { Fragment, useState } from 'react';
import Input from 'src/components/Input';
import PasswordVisibilityButton from 'src/features/auth/components/Button/PasswordVisibilityButton';

const PasswordInput = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	return (
		<Fragment>
			<Input
				style={{ paddingRight: '40px' }}
				type={passwordVisibility ? 'text' : 'password'}
				placeholder='Password'
			/>
			<PasswordVisibilityButton
				onClick={(isPasswordVisible) =>
					setPasswordVisibility(isPasswordVisible)
				}
			/>
		</Fragment>
	);
};

export default PasswordInput;
