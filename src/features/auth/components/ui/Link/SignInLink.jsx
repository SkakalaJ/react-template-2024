/** @format */

import { Link } from 'react-router-dom';

import SignInText from '../Text/SignInText';

const SignUpLink = () => {
	return (
		<Link to='/auth'>
			<SignInText />
		</Link>
	);
};

export default SignUpLink;
