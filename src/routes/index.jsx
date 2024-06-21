/** @format */
// Path: src/routes/index.jsx

// Packages
import { Navigate } from 'react-router-dom';
// Pages
import HomePage from 'src/pages/home';
// Routes
import AuthRoute from 'src/features/auth/routes';
import UserRoute from 'src/features/user/routes';

const RootRoute = {
	path: '/',
	element: <HomePage />,
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

const AppRoutes = [RootRoute, AuthRoute, UserRoute, FallBackRoute];

export default AppRoutes;
