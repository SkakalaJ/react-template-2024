/** @format */

import './index.css';

import Box from 'src/shared/components/layout/Box';
import PropTypes from 'prop-types';

const SphereLoader = (props) => {
	return (
		<Box
			flex='none'
			height='100%'
		>
			<div
				className='sphere-loader'
				style={{
					flex: 'none',
					height: props.height,
					width: props.width,
					margin: props.margin,
					padding: props.padding,
				}}
			></div>
		</Box>
	);
};

SphereLoader.defaultProps = {
	height: '200px',
	width: '200px',
	margin: '0',
	padding: '0',
};

SphereLoader.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
};

export default SphereLoader;
