/** @format */

import { Routes, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import SignInContentElements from 'src/features/auth/components/Content/SignInContentElements';
import SignUpContentElements from 'src/features/auth/components/Content/SignUpContentElements';

const AuthRoutes = ({ RootPage }) => {
	return (
		<Routes>
			<Route
				path='auth'
				element={RootPage}
			>
				<Route
					index
					element={<SignUpContentElements />}
				/>
				<Route
					path='sign-in'
					element={<SignInContentElements />}
				/>
				<Route
					path='sign-up'
					element={<SignUpContentElements />}
				/>
				<Route
					path='*'
					element={<SignUpContentElements />}
				/>
			</Route>
		</Routes>
	);
};

export default AuthRoutes;

AuthRoutes.propTypes = {
	RootPage: PropTypes.element.isRequired,
};
