/** @format */
// Path: src/features/auth/routes/index.jsx

// Packages
import { Navigate } from 'react-router-dom';
// Pages
import AuthPage from 'src/pages/auth';
// Routes
import SignUpRoute from './sign-up';
import PasswordRoute from './password';
// Features
import SignInContentElements from 'src/features/auth/components/Content/SignInContentElements';

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

const AuthRoute = {
	path: 'auth',
	element: <AuthPage />,
	children: [IndexRoute, SignUpRoute, PasswordRoute, FallBackRoute],
};

export default AuthRoute;
