/** @format */

// Packages
import { Navigate } from 'react-router-dom';
// Features

const IndexRoute = {
	index: true,
	element: <>authors-info</>,
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
