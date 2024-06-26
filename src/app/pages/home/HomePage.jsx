/** @format */

// Layouts
import HomeLayout from 'src/features/home/layouts/HomeLayout';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomePage = () => {
	const navigate = useNavigate();
	const showHomePage = useSelector((state) => state.user.showHomePage);
	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		if (!showHomePage && user) {
			navigate('/profile');
			console.log('Redirecting to Profile Page...');
		}
	}, [navigate, showHomePage, user]);

	return <HomeLayout />;
};

export default HomePage;
