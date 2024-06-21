/** @format */

// Packages
import { Navigate } from 'react-router-dom';
// Features

const IndexRoute = {
	index: true,
	element: <>random apis</>,
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

const RandomAPIsRoute = {
	path: 'random-apis',
	children: [IndexRoute, FallBackRoute],
};

export default RandomAPIsRoute;
