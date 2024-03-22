/** @format */

import PropTypes from 'prop-types';
import './index.css';

const Card = (props) => {
	return (
		<div
			className={props.className}
			style={{
				...props.style,
				height: props.height,
				width: props.width,
				flexDirection: props.flexDirection,
			}}
		>
			{props.children}
		</div>
	);
};

Card.defaultProps = {
	id: '',
	style: {},
	className: 'card-default',
	flexDirection: 'column',
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	flexDirection: PropTypes.oneOf(['column', 'row']),
	width: PropTypes.string,
	height: PropTypes.string,
};

export default Card;
