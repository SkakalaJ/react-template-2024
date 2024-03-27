/** @format */

import Input from 'src/components/Input';

const FirstNameInput = () => {
	const validation = (value) => {
		return value;
	};

	return (
		<Input
			isRequired
			style={{ marginRight: '5x' }}
			placeholder='First name'
			name='firstName'
			onInvalid={(e) => {
				e.target.setCustomValidity(validation(e.target.value));
			}}
		/>
	);
};

export default FirstNameInput;
