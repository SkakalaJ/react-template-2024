/** @format */

// Packages
import { Navigate } from 'react-router-dom';
import RandomAPIsContent from '../../components/Content/RandomAPIsContent';
// Features

const IndexRoute = {
	index: true,
	element: <RandomAPIsContent />,
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
