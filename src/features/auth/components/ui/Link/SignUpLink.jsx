/** @format */

import { Link } from 'react-router-dom';

import RegisterNowText from '../Text/RegisterNowText';

const SignUpLink = () => {
	return (
		<Link to='/auth/sign-up'>
			<RegisterNowText />
		</Link>
	);
};

export default SignUpLink;
