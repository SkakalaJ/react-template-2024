/** @format */
// Path: src/index.js

// React
// import React from 'react';
import ReactDOM from 'react-dom/client';
// Styles
import './index.css';
// Components
import App from './app/main';
// Utilities
import reportWebVitals from './shared/utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<App />,
	// </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
