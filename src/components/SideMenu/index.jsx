/** @format */
import PropTypes from 'prop-types';
// styles
import './index.css';

const SideMenu = (props) => {
	return (
		<aside
			className={props.className}
			style={{
				...props.style,
				width: props.width,
				height: props.height,
				justifyContent: props.justifyContent,
				flexDirection: props.flexDirection,
			}}
		>
			{props.children}
		</aside>
	);
};

SideMenu.defaultProps = {
	style: {},
	justifyContent: 'center',
	flexDirection: 'column',
	width: '240px',
	height: '100vh',
	className: 'side-menu-default',
};

SideMenu.propTypes = {
	// required
	children: PropTypes.node.isRequired,
	// optional
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
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
	flexDirection: PropTypes.oneOf([
		'column',
		'column-reverse',
		'row',
		'row-reverse',
		'inherit',
		'initial',
		'revert',
		'unset',
	]),
};

export default SideMenu;
