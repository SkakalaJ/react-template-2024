/** @format */

import PropTypes from 'prop-types';

import './index.css';

// Default css class nemoze byt lebo potom je tazke aplikovat button bez aplikacie CSS
const Button = (props) => {

	return (
		<button
			className={props.className}
			style={props.style}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

Button.defaultProps = {
	id: '',
	style: {},
	className: 'button-default',
	elementType: 'a',
	onClick: () => {},
};

Button.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	elementType: PropTypes.oneOf(['button', 'div', 'a']),
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default Button;
