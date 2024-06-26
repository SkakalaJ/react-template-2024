/** @format */

// Packages
import { Navigate } from 'react-router-dom';
// Features
import AuthorsInfoContent from 'src/features/user/components/Content/AuthorsInfoContent';

const IndexRoute = {
	index: true,
	element: <AuthorsInfoContent />,
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

const AuthorRoute = {
	path: 'author',
	children: [IndexRoute, FallBackRoute],
};

export default AuthorRoute;
