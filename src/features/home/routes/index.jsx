/** @format */

import { Routes, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

const HomeRoutes = ({ RootPage }) => {
	return (
		<Routes>
			<Route
				index
				element={RootPage}
			/>
			<Route
				path='/'
				element={RootPage}
			/>
			<Route
				path='*'
				element={RootPage}
			/>
		</Routes>
	);
};

HomeRoutes.propTypes = {
	RootPage: PropTypes.element.isRequired,
};

export default HomeRoutes;
