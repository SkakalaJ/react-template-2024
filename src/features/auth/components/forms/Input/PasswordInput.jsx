/** @format */
import { Fragment, useState, useRef } from 'react';

import Input from 'src/shared/components/forms/Input';
import PasswordVisibilityButton from 'src/features/auth/components/ui/Button/PasswordVisibilityButton';

const PasswordInput = () => {
	const inputRef = useRef(null);
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	const basicValidation = (validityState) => {
		if (validityState.valueMissing) {
			return 'Password is required';
		}

		return '';
	};

	const validation = () => {
		const validityState = inputRef.current.validity;
		const basic = basicValidation(validityState);

		if (basic) {
			return basic;
		}

		return '';
	};

	return (
		<Fragment>
			<Input
				ref={inputRef}
				isRequired
				autoComplete='off'
				style={{ paddingRight: '40px' }}
				type={passwordVisibility ? 'text' : 'password'}
				placeholder='Password'
				name='password'
				onInput={(e) => {
					e.target.setCustomValidity(validation(e.target.value));
					e.target.reportValidity();
				}}
				onInvalid={(e) => {
					e.target.setCustomValidity(validation());
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

export default PasswordInput;
