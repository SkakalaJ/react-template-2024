/** @format */

import PropTypes from 'prop-types';

import './index.css';

// Default css class nemoze byt lebo potom je tazke aplikovat button bez aplikacie CSS
const Button = (props) => {
	const buttonTag = () => {
		return (
			<button
				type={props.buttonType}
				className={props.className}
				style={{
					cursor: 'pointer',
					...props.style,
				}}
				onClick={props.onClick}
			>
				{props.children}
			</button>
		);
	};

	const divTag = () => {
		return (
			<div
				className={props.className}
				style={{
					cursor: 'pointer',
					...props.style,
				}}
				onClick={props.onClick}
			>
				{props.children}
			</div>
		);
	};

	const aTag = () => {
		return (
			<a
				className={props.className}
				style={{
					cursor: 'pointer',
					...props.style,
				}}
				onClick={props.onClick}
				href={props.href}
				target={props.target ? props.target : '_self'}
			>
				{props.children}
			</a>
		);
	};

	const wrapChildrenInTag = () => {
		switch (props.elementType) {
			case 'button':
				return buttonTag();
			case 'div':
				return divTag();
			case 'a':
				return aTag();
			default:
				return buttonTag();
		}
	};

	return wrapChildrenInTag();
};

Button.defaultProps = {
	id: '',
	style: {},
	href: '',
	target: '_self',
	buttonType: 'button',
	className: 'button-default',
	elementType: 'button',
	onClick: () => {},
};

Button.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	href: PropTypes.string,
	target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top', 'framename']),
	elementType: PropTypes.oneOf(['button', 'div', 'a']),
	buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default Button;
