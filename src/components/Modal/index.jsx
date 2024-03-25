/** @format */

import PropTypes from 'prop-types';
import './index.css';

const Modal = (props) => {
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
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
};

export default Modal;
