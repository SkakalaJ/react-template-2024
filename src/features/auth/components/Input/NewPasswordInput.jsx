/** @format */
import { Fragment, useState, useRef } from 'react';
import validator from 'validator';

import Input from 'src/components/Input';
import PasswordVisibilityButton from 'src/features/auth/components/Button/PasswordVisibilityButton';

const NewPasswordInput = () => {
	const inputRef = useRef(null);

	const [passwordVisibility, setPasswordVisibility] = useState(false);

	const specialValidation = (value) => {
		const hasUppercase = validator.matches(value, /[A-Z]/);
		if (!hasUppercase) {
			return 'Password must contain at least one uppercase letter';
		}

		const hasLowercase = validator.matches(value, /[a-z]/);
		if (!hasLowercase) {
			return 'Password must contain at least one lowercase letter';
		}

		const hasNumber = validator.matches(value, /[0-9]/);
		if (!hasNumber) {
			return 'Password must contain at least one number';
		}

		const hasSpecialCharacter = validator.matches(
			value,
			/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
		);
		if (!hasSpecialCharacter) {
			return 'Password must contain at least one special character';
		}

		const isStrongPassword = validator.isStrongPassword(value);
		if (!isStrongPassword) {
			return 'Password is not strong enough';
		}

		return '';
	};

	const basicValidation = (validityState) => {
		if (validityState.valueMissing) {
			return 'Password is required';
		}

		if (validityState.typeMismatch) {
			return 'Invalid password';
		}

		if (validityState.tooShort) {
			return 'Password is too short';
		}

		if (validityState.tooLong) {
			return 'Password is too long';
		}

		if (validityState.patternMismatch) {
			return 'Invalid password';
		}

		if (validityState.rangeUnderflow) {
			return 'Password is too short';
		}

		if (validityState.rangeOverflow) {
			return 'Password is too long';
		}

		if (validityState.stepMismatch) {
			return 'Invalid password';
		}

		return '';
	};

	const validation = (value) => {
		const validityState = inputRef.current.validity;
		const basic = basicValidation(validityState);

		if (basic) {
			return basic;
		}

		const special = specialValidation(value);

		if (special) {
			return special;
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
				placeholder='New password'
				name='newPassword'
				minLength={8}
				maxLength={256}
				onInput={(e) => {
					e.target.setCustomValidity(validation(e.target.value));
					e.target.reportValidity();
				}}
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
