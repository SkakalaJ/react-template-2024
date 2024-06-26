/** @format */

import { Link } from 'react-router-dom';

import ForgotPasswordText from '../Text/ForgotPasswordText';

const ForgotPasswordLink = () => {
	return (
		<Link to='/auth/password/reset'>
			<ForgotPasswordText />
		</Link>
	);
};

export default ForgotPasswordLink;
