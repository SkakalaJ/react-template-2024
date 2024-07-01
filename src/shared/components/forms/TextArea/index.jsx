/** @format */
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const TextArea = forwardRef((props, ref) => {
	return (
		<textarea
			ref={ref}
			type={props.type}
			className={props.className}
			placeholder={props.placeholder}
			style={{
				...props.style,
				maxWidth: props.maxWidth,
				maxHeight: props.maxHeight,
			}}
			onChange={props.onChange}
			required={props.isRequired}
			readOnly={props.isReadOnly}
			onInvalid={props.onInvalid}
			onInput={props.onInput}
			name={props.name}
			autoComplete={props.autoComplete}
			minLength={`${props.minLength}`}
			maxLength={`${props.maxLength}`}
			value={props.value}
		/>
	);
});

TextArea.defaultProps = {
	id: '',
	className: 'input-default',
	type: 'text',
	isRequired: false,
	isReadOnly: false,
	autoComplete: 'on',
	minLength: 0,
	maxLength: 256,
	maxWidth: '100%',
	maxHeight: '100%',
};

TextArea.propTypes = {
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
	onChange: PropTypes.func,
	onInvalid: PropTypes.func,
	onInput: PropTypes.func,
	isRequired: PropTypes.bool,
	isReadOnly: PropTypes.bool,
	autoComplete: PropTypes.string,
	name: PropTypes.string.isRequired,
	minLength: PropTypes.number,
	maxLength: PropTypes.number,
	value: PropTypes.string,
	maxWidth: PropTypes.string,
	maxHeight: PropTypes.string,
};

TextArea.displayName = 'TextArea';

export default TextArea;
