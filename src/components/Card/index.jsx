/** @format */

import PropTypes from 'prop-types';
import './index.css';

const Card = (props) => {
	return (
		<div
			className={`${props.className}`}
			style={props.style}
		>
			{props.children}
		</div>
	);
};

Card.defaultProps = {
	id: '',
	style: {},
	className: 'card-default',
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
};

export default Card;
