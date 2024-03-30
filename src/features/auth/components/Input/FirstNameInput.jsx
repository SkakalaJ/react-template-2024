/** @format */

import { useRef } from 'react';
import validator from 'validator';

import Input from 'src/components/Input';

const FirstNameInput = () => {
	const inputRef = useRef(null);

	const specialValidation = (value) => {
		const onlyLetters = validator.isAlpha(value);
		if (!onlyLetters) {
			return 'Invalid first name';
		}

		const isFirstCapital = validator.isUppercase(value[0]);
		if (!isFirstCapital) {
			return 'First letter must be capital';
		}

		const isRestLowercase = validator.isLowercase(value.slice(1));
		if (!isRestLowercase) {
			return 'Only first letter must be capital';
		}

		return '';
	};

	const basicValidation = (validityState) => {
		if (validityState.valueMissing) {
			return 'First name is required';
		}

		if (validityState.typeMismatch) {
			return 'Invalid first name';
		}

		if (validityState.tooShort) {
			return 'First name is too short';
		}

		if (validityState.tooLong) {
			return 'First name is too long';
		}

		if (validityState.patternMismatch) {
			return 'Invalid first name';
		}

		if (validityState.rangeUnderflow) {
			return 'First name is too short';
		}

		if (validityState.rangeOverflow) {
			return 'First name is too long';
		}

		if (validityState.stepMismatch) {
			return 'Invalid first name';
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
			style={{ marginRight: '5x' }}
			placeholder='First name'
			name='firstName'
			minLength={2}
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

export default FirstNameInput;
