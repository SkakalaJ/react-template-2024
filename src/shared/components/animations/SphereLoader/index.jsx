/** @format */

import './index.css';

import Box from 'src/shared/components/layout/Box';

const SphereLoader = () => {
	return (
		<Box flex='none' height='100%'>
			<div className="sphere-loader" style={{ flex: 'none' }}></div>
		</Box>
	);
};

export default SphereLoader;
