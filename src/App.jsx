/** @format */
// import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AuthPage from './pages/auth';
import './App.css';

import AuthRoutes from './features/auth/routes';
import HomeRoutes from './features/home/routes';
import { Fragment } from 'react';

// import SignInContentElements from './features/auth/components/Content/SignInContentElements';
// import SignUpContentElements from './features/auth/components/Content/SignUpContentElements';

function App() {
	return (
		<Fragment>
			<AuthRoutes RootPage={<AuthPage />} />
			<HomeRoutes RootPage={<HomePage />} />
			{/* <Routes>
				
			</Routes> */}
		</Fragment>
	);
}

export default App;
