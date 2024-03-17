/** @format */

import { Route } from 'react-router-dom';

import SignInContentElements from 'src/features/components/SignInContentElements';
import SignUpContentElements from 'src/features/components/SignUpContentElements';

const AuthRoutes = () => {

	return (
        <>
            <Route index element={<Auth />} />
            <Route
                path='sign-in'
                element={<SignInContentElements />}
            />
            <Route
                path='sign-up'
                element={<SignUpContentElements />}
            />
            <Route path="*" element={<Auth />} />
        </>
	);
};

export default AuthRoutes;