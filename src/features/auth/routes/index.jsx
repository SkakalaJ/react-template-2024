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
					element={<SignInContentElements />}
				/>
				<Route
					path='password/reset'
					element={<SignInContentElements />}
				/>
				<Route
					path='sign-up'
					element={<SignUpContentElements />}
				/>
				<Route
					path='*'
					element={<SignInContentElements />}
				/>
			</Route>
		</Routes>
	);
};

export default AuthRoutes;

AuthRoutes.propTypes = {
	RootPage: PropTypes.element.isRequired,
};
