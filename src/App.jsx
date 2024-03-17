/** @format */

import Home from './pages/home';
import Auth from './pages/auth';
import { Routes, Route } from 'react-router-dom';
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
				<Route index element={<Auth />} />
				<Route
					path='sign-in'
					element={<Auth />}
				/>
				<Route
					path='sign-up'
					element={<Auth />}
				/>
				<Route path="*" element={<Auth />} />
			</Route>
			<Route
				path='*'
				element={<Home />}
			/>
		</Routes>
	);
}

export default App;
