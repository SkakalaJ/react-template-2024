/** @format */
// Path: src/features/auth/routes/password/index.jsx

// Packages
import { Navigate } from 'react-router-dom';
// Routes
import PasswordResetRoute from './reset';

const IndexRoute = {
	index: true,
	element: (
		<Navigate
			to='reset'
			replace
		/>
	),
};

const FallBackRoute = {
	path: '*',
	element: (
		<Navigate
			to='reset'
			replace
		/>
	),
};

const PasswordRoute = {
	path: 'password',
	children: [IndexRoute, PasswordResetRoute, FallBackRoute],
};

export default PasswordRoute;
