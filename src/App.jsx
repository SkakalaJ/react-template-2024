/** @format */

import Home from './pages/home';
import Auth from './pages/auth';
import { Routes, Route } from 'react-router-dom';
import AuthRoutes from 'src/features/auth/routes';
import './App.css';

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
				path='auth'
				element={<Auth />}
			>
				<AuthRoutes />
			</Route>
			<Route
				path='*'
				element={<Home />}
			/>
		</Routes>
	);
}

export default App;
