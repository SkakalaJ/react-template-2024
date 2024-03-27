/** @format */

import Input from 'src/components/Input';

const LastNameInput = () => {
	const validation = (value) => {
		return value;
	};

	return (
		<Input
			isRequired
			style={{ marginLeft: '5px' }}
			placeholder='Last name'
			name='lastName'
			onInvalid={(e) => {
				e.target.setCustomValidity(validation(e.target.value));
			}}
		/>
	);
};

export default LastNameInput;
