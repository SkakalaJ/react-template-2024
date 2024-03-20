/** @format */

import PropTypes from 'prop-types';

const Text = (props) => {
	const getTextElement = () => {
		switch (props.tag) {
			case 'h1':
				return (
					<h1
						id={props.id}
						className={props.className}
						style={props.style}
					>
						{props.text}
					</h1>
				);
			case 'h2':
				return (
					<h2
						id={props.id}
						className={props.className}
						style={props.style}
					>
						{props.text}
					</h2>
				);
			case 'h3':
				return (
					<h3
						id={props.id}
						className={props.className}
						style={props.style}
					>
						{props.text}
					</h3>
				);
			case 'h4':
				return (
					<h4
						id={props.id}
						className={props.className}
						style={props.style}
					>
						{props.text}
					</h4>
				);
			case 'h5':
				return (
					<h5
						id={props.id}
						className={props.className}
						style={props.style}
					>
						{props.text}
					</h5>
				);
			case 'h6':
				return (
					<h6
						id={props.id}
						className={props.className}
						style={props.style}
					>
						{props.text}
					</h6>
				);
			case 'span':
				return (
					<span
						id={props.id}
						className={props.className}
						style={props.style}
					>
						{props.text}
					</span>
				);
			case 'a':
				return (
					<a
						id={props.id}
						className={props.className}
						style={props.style}
						href={props.href}
						target={props.target}
					>
						{props.text}
					</a>
				);
			default:
				return (
					<p
						id={props.id}
						className={props.className}
						style={props.style}
					>
						{props.text}
					</p>
				);
		}
	};

	return getTextElement();
};

Text.defaultProps = {
	target: '_blank',
	style: {},
	tag: 'p',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

Text.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	tag: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'a']),
	href: PropTypes.string,
	target: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default Text;
