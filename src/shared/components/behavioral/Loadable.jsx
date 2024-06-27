// src/components/Loadable/Loadable.js
import { useEffect } from 'react';
import { useLoading } from 'src/shared/contexts/loadingContext'; // Adjust the path as necessary

const Loadable = ({ children }) => {
  const { notifyLoaded } = useLoading();

  useEffect(() => {
    // Simulate async loading
    const timer = setTimeout(() => {
      notifyLoaded();
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, [notifyLoaded]);

  return children;
};

export default Loadable;