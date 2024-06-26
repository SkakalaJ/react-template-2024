/** @format */

// Packages
import { Navigate } from 'react-router-dom';
// Features
import TemplateBibleContent from 'src/features/user/components/Content/TemplateBibleContent';

const IndexRoute = {
	index: true,
	element: <TemplateBibleContent />,
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

const TemplateBibleRoute = {
	path: 'template-bible',
	children: [IndexRoute, FallBackRoute],
};

export default TemplateBibleRoute;
