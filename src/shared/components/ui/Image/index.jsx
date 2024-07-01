/** @format */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Image = (props) => {
	const [loading, setLoading] = useState(true);

	const handleImageLoad = () => {
		setLoading(false);
		if (props.onLoad) {
			props.onLoad();
		}
	};

	useEffect(() => {
		setLoading(true);
	}, [props.src, props.loadingComponent]);

	return (
		<>
			{loading && props.loadingComponent}

			<img
				style={{
					display: props.display,
					objectFit: props.objectFit,
					...props.style,
					visibility: loading && props.loadingComponent ? 'hidden' : 'visible',
				}}
				src={props.src}
				alt={props.alt}
				onLoad={handleImageLoad}
			/>
		</>
	);
};

Image.defaultProps = {
	style: {},
	display: 'block',
	objectFit: 'contain',
};

Image.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	display: PropTypes.string,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	objectFit: PropTypes.string,
	onLoad: PropTypes.func,
	loadingComponent: PropTypes.element,
};

export default Image;
