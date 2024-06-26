/** @format */

import { Fragment } from 'react';
import GithubHeaderButton from 'src/features/auth/components/ui/Button/GithubHeaderButton';
import HomeHeaderButton from 'src/features/auth/components/ui/Button/HomeHeaderButton';

const HeaderElements = () => {
	return (
		<Fragment>
			<GithubHeaderButton />
			<HomeHeaderButton />
		</Fragment>
	);
};

export default HeaderElements;
