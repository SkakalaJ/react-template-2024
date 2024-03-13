/** @format */
import PropTypes from 'prop-types';

// styles
import './CircleUI.css';
import { useEffect } from 'react';

const CircleUI = (props) => {
	useEffect(() => {
		console.log('LOADED');
	}, []);

	return <div className='circle'></div>;
};

CircleUI.defaultProps = {};

CircleUI.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
};

export default CircleUI;
