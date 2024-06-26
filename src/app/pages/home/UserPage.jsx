/** @format */

// Layouts
import UserLayout from 'src/features/user/layouts/UserLayout';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const UserPage = () => {
	const navigate = useNavigate();
	const showHomePage = useSelector((state) => state.user.showHomePage);
	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		if (!showHomePage || !user) {
			navigate('/');
			console.log('Redirecting to Home Page...');
		}
	}, [navigate, user, showHomePage]);

	return <UserLayout />;
};

export default UserPage;
