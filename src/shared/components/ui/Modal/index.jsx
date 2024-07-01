/** @format */

import PropTypes from 'prop-types';
import './index.css';

const Modal = (props) => {
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

Modal.defaultProps = {
	style: {},
	className: 'modal-default',
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	showModal: PropTypes.bool,
};

export default Modal;
