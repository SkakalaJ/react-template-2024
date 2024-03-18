/** @format */

import { Route } from 'react-router-dom';

import SignInContentElements from 'src/features/auth/components/Content/SignInContentElements';
import SignUpContentElements from 'src/features/auth/components/Content/SignUpContentElements';

export default [
	<Route
		index
		element={<SignUpContentElements />}
		key='auth-index'
	/>,
	<Route
		path='sign-in'
		element={<SignInContentElements />}
		key='auth-sign-in'
	/>,
	<Route
		path='sign-up'
		element={<SignUpContentElements />}
		key='auth-sign-up'
	/>,
	<Route
		path='*'
		element={<SignUpContentElements />}
		key='auth-*'
	/>
];
