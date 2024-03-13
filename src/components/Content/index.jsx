/** @format */

/** @format */
import PropTypes from 'prop-types';
// styles
import './index.css';

const Content = (props) => {
	return (
		<div
			className={props.className}
			style={{
				...props.style,
			}}
		>
			{props.children}
		</div>
	);
};

Content.defaultProps = {
	style: {},
	className: 'content-container-default',
};

Content.propTypes = {
	// required
	children: PropTypes.node.isRequired,
	// optional
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
};

export default Content;
