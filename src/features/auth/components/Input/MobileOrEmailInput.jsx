/** @format */

import Input from 'src/components/Input';

const MobileOrEmailInput = () => {
	const validation = (value) => {
		return value;
	};

	return (
		<Input
			isRequired
			placeholder='Mobile number or email'
			name='mobileOrEmail'
			onInvalid={(e) => {
				e.target.setCustomValidity(validation(e.target.value));
			}}
		/>
	);
};

export default MobileOrEmailInput;
