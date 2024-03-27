/** @format */
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Input = forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			type={props.type}
			className={props.className}
			placeholder={props.placeholder}
			style={props.style}
			onChange={props.onInputChange}
			required={props.isRequired}
			onInvalid={props.onInvalid}
			name={props.name}
		/>
	);
});

Input.defaultProps = {
	id: '',
	className: 'input-default',
	type: 'text',
	isRequired: false,
};

Input.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	type: PropTypes.oneOf([
		'button',
		'checkbox',
		'color',
		'date',
		'datetime-local',
		'email',
		'file',
		'hidden',
		'image',
		'month',
		'number',
		'password',
		'radio',
		'range',
		'reset',
		'search',
		'submit',
		'tel',
		'text',
		'time',
		'url',
		'week',
	]),
	placeholder: PropTypes.string.isRequired,
	onInputChange: PropTypes.func,
	onInvalid: PropTypes.func,
	isRequired: PropTypes.bool,
	name: PropTypes.string.isRequired,
};

Input.displayName = 'Input';

export default Input;
