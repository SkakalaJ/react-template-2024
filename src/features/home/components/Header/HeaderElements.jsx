/** @format */

import { useSelector } from 'react-redux';

import { Fragment } from 'react';

// Components
import SignInButton from 'src/features/home/components/Button/SignInButton';
import GithubButton from 'src/features/home/components/Button/GithubButton';

const HeaderElements = () => {
	const intro = useSelector((state) => state.home.intro);

	const getHeaderFeatures = () => {
		if (intro.play) {
			return <div></div>;
		}

		return (
			<Fragment>
				<GithubButton />
				<SignInButton />
			</Fragment>
		);
	};

	return <>{getHeaderFeatures()}</>;
};

export default HeaderElements;
