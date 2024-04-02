/** @format */
// Path: src/features/auth/routes/sign-up/index.jsx

// Packages
import { Navigate } from 'react-router-dom';
// Features
import SignUpContentElements from 'src/features/auth/components/Content/SignUpContentElements';

const IndexRoute = {
	index: true,
	element: <SignUpContentElements />,
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

const SignUpRoute = {
	path: 'sign-up',
	children: [IndexRoute, FallBackRoute],
};

export default SignUpRoute;
