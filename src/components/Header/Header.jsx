/** @format */
import PropTypes from 'prop-types';
// styles
import './Header.css';

const Header = (props) => {
	return (
		<header
			className={props.className}
			style={{
				...props.style,
				height: props.height,
				justifyContent: props.justifyContent,
			}}
		>
			{props.children}
		</header>
	);
};

Header.defaultProps = {
	style: {},
	height: '75px',
	justifyContent: 'center',
};

Header.propTypes = {
	// required
	children: PropTypes.node.isRequired,
	// optional
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	height: PropTypes.string,
	justifyContent: PropTypes.string, // 'center', 'end', 'flex-start', 'flex-end', 'left', 'normal', 'right', 'space-around', 'space-between', 'space-evenly', 'start', 'stretch', 'inherit', 'initial', 'revert', 'revert-layer', 'unset'
};

export default Header;
