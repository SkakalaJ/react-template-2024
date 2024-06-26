/** @format */
// Path: src/App.jsx

// Packages
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
// Routes
import AppRoutes from './routes';
// Store
import store from './store';
// Styles
import './main.css';

const router = createBrowserRouter(AppRoutes);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
