/** @format */

import PropTypes from 'prop-types';
import Text from './Text';

const Button = (props) => {
	return (
		<div
			className={`button ${props.className}`}
			style={props.style}
		>
			<Text
				tag={'a'}
				text={props.text}
			/>
		</div>
	);
};

Button.defaultProps = {
	id: '',
	style: {},
	className: '',
	text: 'Lorem',
};

Button.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	text: PropTypes.string,
};

export default Button;
