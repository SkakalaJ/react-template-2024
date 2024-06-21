/** @format */
// Path: src/features/auth/routes/index.jsx

// Packages
import { Navigate } from 'react-router-dom';
// Pages
import HomePage from 'src/pages/home';
// Routes
import RandomAPIsRoute from 'src/features/user/routes/random-apis';
import AuthorsInfoRoute from 'src/features/user/routes/authors-info';

const IndexRoute = {
	index: true,
	element: <>users profile</>,
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

const UserRoute = {
	path: '/',
	element: <HomePage />,
	children: [IndexRoute, RandomAPIsRoute, AuthorsInfoRoute, FallBackRoute],
};

export default UserRoute;
