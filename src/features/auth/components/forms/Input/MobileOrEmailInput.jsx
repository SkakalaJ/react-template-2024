/** @format */

import { useRef } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import Input from 'src/shared/components/forms/Input';

const MobileOrEmailInput = (props) => {
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
			value={props.value}
			isRequired
			isReadOnly={props.isReadOnly}
			autoComplete='off'
			placeholder='Mobile number or email'
			name='mobileOrEmail'
			minLength={1}
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

MobileOrEmailInput.propTypes = {
	isReadOnly: PropTypes.bool,
	value: PropTypes.string,
};

export default MobileOrEmailInput;
