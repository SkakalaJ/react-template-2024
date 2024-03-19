/** @format */

import { Routes, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

const HomeRoutes = ({ RootComponent }) => {
	return (
		<Routes>
			<Route
				index
				element={RootComponent}
			/>
			<Route
				path='/'
				element={RootComponent}
			/>
		</Routes>
	);
};

export default HomeRoutes;

HomeRoutes.propTypes = {
	RootComponent: PropTypes.element.isRequired,
};
