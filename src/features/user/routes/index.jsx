/** @format */
// Path: src/features/auth/routes/index.jsx

// Packages
import { Navigate } from 'react-router-dom';
// Pages
import UserPage from 'src/app/pages/home/UserPage';
// Routes
import RandomAPIsRoute from 'src/features/user/routes/random-apis';
import AuthorsInfoRoute from 'src/features/user/routes/authors-info';
import TemplateBibleRoute from 'src/features/user/routes/template-bible';
// Features
import UserProfileContent from '../components/Content/UserProfileContent';

const IndexRoute = {
	index: true,
	element: <UserProfileContent />,
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
	path: '/profile',
	element: <UserPage />,
	children: [
		IndexRoute,
		RandomAPIsRoute,
		TemplateBibleRoute,
		AuthorsInfoRoute,
		FallBackRoute,
	],
};

export default UserRoute;
