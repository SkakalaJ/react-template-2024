/** @format */
// Path: src/features/auth/routes/password/reset/index.jsx

// Packages
import { Navigate } from 'react-router-dom';
// Features
import SignInContentElements from 'src/features/auth/components/layout/Content/SignInContentElements';

const IndexRoute = {
	index: true,
	element: <SignInContentElements />,
};

const FallBackRoute = {
	path: '*',
	element: (
		<Navigate
			to='.'
			replace
		/>
	),
};

const PasswordResetRoute = {
	path: 'reset',
	children: [IndexRoute, FallBackRoute],
};

export default PasswordResetRoute;
