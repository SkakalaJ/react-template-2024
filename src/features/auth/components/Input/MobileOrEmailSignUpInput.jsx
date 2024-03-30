/** @format */

import { useRef } from 'react';
import validator from 'validator';

import Input from 'src/components/Input';

const MobileOrEmailSignUpInput = () => {
	const inputRef = useRef(null);

	const specialValidation = (value) => {
		const isEmail = validator.isEmail(value);
		const isMobile = validator.isMobilePhone(value, 'any');
		if (!isEmail && !isMobile) {
			return 'Invalid email or mobile number';
		}

		return '';
	};

	const basicValidation = (validityState) => {
		if (validityState.valueMissing) {
			return 'Mobile number or email is required';
		}

		if (validityState.typeMismatch) {
			return 'Invalid email or mobile number';
		}

		if (validityState.tooShort) {
			return 'Mobile number or email is too short';
		}

		if (validityState.tooLong) {
			return 'Mobile number or email is too long';
		}

		if (validityState.patternMismatch) {
			return 'Invalid email or mobile number';
		}

		if (validityState.rangeUnderflow) {
			return 'Mobile number or email is too short';
		}

		if (validityState.rangeOverflow) {
			return 'Mobile number or email is too long';
		}

		if (validityState.stepMismatch) {
			return 'Invalid email or mobile number';
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
		<Input
			ref={inputRef}
			isRequired
			autoComplete='off'
			placeholder='Mobile number or email'
			name='mobileOrEmail'
			minLength={6}
			maxLength={128}
			onInput={(e) => {
				e.target.setCustomValidity(validation(e.target.value));
				e.target.reportValidity();
			}}
			onInvalid={(e) => {
				e.target.setCustomValidity(validation(e.target.value));
			}}
		/>
	);
};

export default MobileOrEmailSignUpInput;
