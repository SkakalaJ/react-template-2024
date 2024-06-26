/** @format */
import PropTypes from 'prop-types';

const Image = (props) => {
	return (
		<img
			display={props.display}
			src={props.src}
			alt={props.alt}
			style={{
				...props.style,
				objectFit: props.objectFit,
			}}
			onLoad={props.onLoad}
		/>
	);
};

Image.defaultProps = {
	style: {},
	controls: true,
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
};

export default Image;
