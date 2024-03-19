/** @format */

import { Routes, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import SignInContentElements from 'src/features/auth/components/Content/SignInContentElements';
import SignUpContentElements from 'src/features/auth/components/Content/SignUpContentElements';

const AuthRoutes = ({ RootComponent }) => {
	return (
		<Routes>
			<Route
				path='auth'
				element={RootComponent}
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
	RootComponent: PropTypes.element.isRequired,
};
