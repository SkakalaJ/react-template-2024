import { useSelector } from 'react-redux';
import Redirect from 'src/shared/components/routing/Redirect';
import LoadingProvider from 'src/shared/contexts/loadingContext';
import Loadable from 'src/shared/components/behavioral/Loadable';

// Layouts
import HomeLayout from 'src/features/home/layouts/HomeLayout';

const HomePage = () => {
  const { showHomePage, user } = useSelector((state) => state.user);

	if (user && !showHomePage) {
		console.log('Redirecting to User Page...');
    return <Redirect to="/profile" />;
	}

  return (
		<LoadingProvider>
			<Loadable>
				<HomeLayout />
			</Loadable>
		</LoadingProvider>
	);
};

export default HomePage;
