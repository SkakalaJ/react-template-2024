/** @format */

import PropTypes from 'prop-types';
import Text from 'src/components/Text';

const Button = (props) => {
	return (
		<div
			className={`button ${props.className}`}
			style={props.style}
			onClick={props.onClick}
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
	className: 'button-default',
	text: 'Lorem',
	onClick: () => {},
};

Button.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
