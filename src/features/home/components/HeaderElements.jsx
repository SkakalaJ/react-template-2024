/** @format */

import { useSelector } from 'react-redux';

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
			<>
				<GithubButton />
				<SignInButton />
			</>
		);
	};

	return <>{getHeaderFeatures()}</>;
};

export default HeaderElements;
