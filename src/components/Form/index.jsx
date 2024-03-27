/** @format */

import PropTypes from 'prop-types';

// Default css class nemoze byt lebo potom je tazke aplikovat button bez aplikacie CSS
const Form = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onFormSubmit(e.target.value);
	};

	return (
		<form
			id={props.id}
			style={{
				width: props.fullWidth ? '100%' : 'auto',
				...props.style,
			}}
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			{props.children}
		</form>
	);
};

Form.defaultProps = {
	style: {},
	fullWidth: true,
	onInputChange: () => {},
};

Form.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	fullWidth: PropTypes.bool,
	onInputChange: PropTypes.func,
	onFormSubmit: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Form;
