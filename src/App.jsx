/** @format */

import Home from './pages/home';
import Auth from './pages/auth';
import {
	Routes,
	Route
} from 'react-router-dom';
import './App.css';

// import {
// 	useNavigate,
// 	useLocation,
// } from 'react-router-dom';

function App() {
	// const navigate = useNavigate();
	// const location = useLocation();

	// const from = location.state?.from?.pathname || '/';

	return (
		<AuthProvider>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/auth'
					element={<Auth />}
				/>
				{/* <Route
					path='/session'
					element={
						<RequireAuth>
							<ProtectedPage />
						</RequireAuth>
					}
				/> */}
			</Routes>
		</AuthProvider>
	);
}

export default App;
