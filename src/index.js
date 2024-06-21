/** @format */
// Path: src/index.js

// React
import ReactDOM from 'react-dom/client';
// Styles
import './index.css';
// Components
import App from './App';
// Utilities
import reportWebVitals from './reportWebVitals';
// Redux
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
