/** @format */
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Auth from './pages/auth';
import AuthRoutes from 'src/features/auth/routes';
import './App.css';

// import SignInContentElements from './features/auth/components/Content/SignInContentElements';
// import SignUpContentElements from './features/auth/components/Content/SignUpContentElements';

function App() {
	return (
		<Routes>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='*'
				element={<Home />}
			/>
			<Route
				path='auth'
				element={<Auth />}
			>
				{AuthRoutes}
			</Route>
		</Routes>
	);
}

export default App;
