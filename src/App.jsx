/** @format */
// Path: src/App.jsx

// Packages
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
// Routes
import AppRoutes from './routes';
// Styles
import './App.css';

const router = createBrowserRouter(AppRoutes);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
