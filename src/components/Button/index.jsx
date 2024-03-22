/** @format */

import PropTypes from 'prop-types';

import './index.css';

const Button = (props) => {
	return (
		<div
			className={props.className}
			style={props.style}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
};

Button.defaultProps = {
	id: '',
	style: {},
	className: 'button-default',
	onClick: () => {},
};

Button.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default Button;
