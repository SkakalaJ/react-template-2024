/** @format */

// Packages
import { Navigate } from 'react-router-dom';
// Features
import SpecialThanksContent from 'src/features/user/components/Content/SpecialThanksContent';

const IndexRoute = {
	index: true,
	element: <SpecialThanksContent />,
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

const SpecialThanksRoute = {
	path: 'special-thanks',
	children: [IndexRoute, FallBackRoute],
};

export default SpecialThanksRoute;
