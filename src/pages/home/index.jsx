/** @format */

import { useSelector } from 'react-redux';
// Layouts
import HomeLayout from 'src/layouts/home/HomeLayout';
import UserLayout from 'src/layouts/user/UserLayout';

const HomePage = () => {
	const user = useSelector((state) => state.user);

	const getLayout = (user) => {
		if (user && user.showHomePage === false) {
			return <UserLayout />;
		}

		return <HomeLayout />;
	};

	return getLayout(user);
};

export default HomePage;
