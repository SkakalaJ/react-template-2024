/** @format */

import PropTypes from 'prop-types';

const Video = (props) => {
	return (
		<video
			id={props.id}
			className={props.className}
			autoPlay={props.autoPlay}
			muted={props.muted}
			loop={props.loop}
			style={props.style}
			controls={props.controls}
			width={props.width}
			height={props.height}
		>
			<source
				src={props.src}
				type={props.videoType}
			/>
			Your browser does not support the video tag.
		</video>
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
	src: PropTypes.string.isRequired,
	videoType: PropTypes.string.isRequired,
};

export default Video;
