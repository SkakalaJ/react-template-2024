/** @format */

import PropTypes from 'prop-types';
import './index.css';

const FlexBox = (props) => {
	return (
		<div
			className={props.className}
			style={{
				...props.style,
				height: props.height,
				width: props.width,
				flexDirection: props.flexDirection,
				justifyContent: props.justifyContent,
				alignItems: props.alignItems,
			}}
		>
			{props.children}
		</div>
	);
};

FlexBox.defaultProps = {
	style: {},
	className: 'flexbox-default',
	height: 'fit-content',
	width: '100%',
	justifyContent: 'space',
	flexDirection: 'column',
	alignItems: 'center',
};

FlexBox.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	flexDirection: PropTypes.oneOf(['column', 'row']),
	justifyContent: PropTypes.oneOf([
		'center',
		'end',
		'flex-start',
		'flex-end',
		'left',
		'normal',
		'right',
		'space-around',
		'space-between',
		'space-evenly',
		'start',
		'stretch',
		'inherit',
		'initial',
		'revert',
		'revert-layer',
		'unset',
	]),
	alignItems: PropTypes.oneOf([
		'normal',
		'stretch',
		'center',
		'flexStart',
		'flexEnd',
		'start',
		'end',
		'baseline',
		'initial',
		'inherit',
	]),
};

export default FlexBox;
