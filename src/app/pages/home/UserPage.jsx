/** @format */

// Layouts
import UserLayout from 'src/features/user/layouts/UserLayout';
import { useSelector } from 'react-redux';
import Redirect from 'src/shared/components/routing/Redirect';
import LoadingProvider from 'src/shared/contexts/loadingContext';
import Loadable from 'src/shared/components/behavioral/Loadable';

const UserPage = () => {
	const { showHomePage, user } = useSelector((state) => state.user);

	if (!user || showHomePage) {
		console.log('Redirecting to Home Page...');
		return <Redirect to='/' />;
	}

	return (
		<LoadingProvider>
			<Loadable>
				<UserLayout />
			</Loadable>
		</LoadingProvider>
	);
};

export default UserPage;
