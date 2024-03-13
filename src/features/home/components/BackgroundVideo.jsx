/** @format */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Assets
import SunBackground from 'src/features/home/assets/videos/pexels-matthias-groeneveld-17929837_(1080p).mp4';
// Components
import Video from 'src/components/Video';
// Redux
import { setIntroVideoId } from 'src/features/home/reducers/homeSlice';

const BackgroundVideo = () => {
	const videoDomId = 'home-background-video';
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIntroVideoId(videoDomId));
	}, [dispatch]);

	return (
		<Video
			id={videoDomId}
			src={SunBackground}
			videoType='video/mp4'
			controls={false}
			loop={false}
			style={{ objectFit: 'cover', position: 'fixed' }}
		/>
	);
};

export default BackgroundVideo;
