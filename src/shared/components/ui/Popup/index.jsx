/** @format */

import PropTypes from 'prop-types';
import './index.css';

const Popup = (props) => {
	if (!props.showModal) {
		return null;
	}

	return (
		<div
			id={props.id}
			className={props.className}
			style={{
				...props.style,
			}}
		>
			{props.children}
		</div>
	);
};

Popup.defaultProps = {
	style: {},
	className: 'popup-default',
};

Popup.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	showModal: PropTypes.bool,
};

export default Modal;
