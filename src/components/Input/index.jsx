/** @format */
import PropTypes from 'prop-types';

const Video = (props) => {
	return (
		
	);
};

Video.defaultProps = {
	autoPlay: true,
	muted: true,
	loop: true,
	style: {},
	controls: true,
	width: '100%',
	height: '100%',
	onPlay: () => {},
};

Video.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	autoPlay: PropTypes.bool,
	muted: PropTypes.bool,
	loop: PropTypes.bool,
	style: PropTypes.object,
	controls: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
	onPlay: PropTypes.func,
	src: PropTypes.string.isRequired,
	videoType: PropTypes.string.isRequired,
};

export default Video;
