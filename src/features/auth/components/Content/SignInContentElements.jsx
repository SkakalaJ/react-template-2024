/** @format */

import { Fragment } from 'react';
import SignInCard from 'src/features/auth/components/Card/SignInCard';
import ResetPasswordModal from '../Modal/ResetPasswordModal';

const SignInContentElements = () => {
	return (
		<Fragment>
			<SignInCard />
			<ResetPasswordModal />
		</Fragment>
	);
};

export default SignInContentElements;
