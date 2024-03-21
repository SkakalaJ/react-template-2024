/** @format */
import PropTypes from 'prop-types';

import './index.css';

const Input = (props) => {
	return (
		<input
			type='text'
			className={props.className}
			placeholder={props.placeholder}
			style={props.style}
		/>
	);
};

Input.defaultProps = {
	id: '',
	className: 'input-default',
	type: 'text',
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
};

export default Input;
