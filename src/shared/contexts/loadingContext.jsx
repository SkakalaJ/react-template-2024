/** @format */

// src/context/LoadingContext.js
import React, {
	createContext,
	useState,
	useContext,
	useCallback,
	useEffect,
} from 'react';
import PropTypes from 'prop-types';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [componentsLoaded, setComponentsLoaded] = useState(0);

	const totalComponents = React.Children.count(children);

	const notifyLoaded = useCallback(() => {
		setComponentsLoaded((prev) => prev + 1);
	}, []);

	useEffect(() => {
		if (componentsLoaded === totalComponents) {
			setLoading(false);
		}
	}, [componentsLoaded, totalComponents]);

	return (
		<LoadingContext.Provider value={{ loading, notifyLoaded }}>
			{children}
		</LoadingContext.Provider>
	);
};

LoadingProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default LoadingProvider;
