/** @format */
import PropTypes from 'prop-types';
// styles
import './index.css';

const Header = (props) => {
	return (
		<header
			className={props.className}
			style={{
				...props.style,
				height: props.height,
				width: props.width,
				justifyContent: props.justifyContent,
				position: props.position,
			}}
		>
			{props.children}
		</header>
	);
};

Header.defaultProps = {
	style: {},
	justifyContent: 'center',
	className: 'header-container-default',
	position: 'fixed',
};

Header.propTypes = {
	// required
	children: PropTypes.node.isRequired,
	// optional
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	height: PropTypes.string,
	width: PropTypes.string,
	position: PropTypes.oneOf(['fixed', 'absolute', 'relative']),
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
};

export default Header;
