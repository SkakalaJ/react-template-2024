/** @format */

import { Fragment } from 'react';
import GithubHeaderButton from 'src/features/auth/components/Button/GithubHeaderButton';
import HomeHeaderButton from 'src/features/auth/components/Button/HomeHeaderButton';

const HeaderElements = () => {
	return (
		<Fragment>
			<GithubHeaderButton />
			<HomeHeaderButton />
		</Fragment>
	);
};

export default HeaderElements;
