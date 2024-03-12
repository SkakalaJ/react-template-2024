/** @format */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Assets
import SunBackground from 'src/assets/videos/background/pexels-matthias-groeneveld-17929837_(1080p).mp4';
//Features
import Intro from 'src/features/Home/Intro';
// Components
import Video from 'src/components/Video';
import Button from 'src/components/Button';
import FadeInOut from 'src/components/FadeInOut';
import CircleUI from 'src/components/CircleUI';
// Layouts
// import Circular from 'src/layouts/Circular';
// Redux
import { playIntro, setIntroVideoId } from 'src/features/Home/homeSlice';

const Home = () => {
	const videoDomId = 'home-background-video';

	const intro = useSelector((state) => state.home.intro);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIntroVideoId(videoDomId));
	}, [dispatch]);

	const getFeature = () => {
		if (intro.play) {
			return <Intro />;
		}

		if (!intro.play) {
			// return <Circular style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 1 }}/>;
			return <CircleUI />;
		}
	};

	const playIntroButtonOnClick = () => {
		const videoDom = document.getElementById(videoDomId);
		videoDom.currentTime = 0;
		videoDom.play();
		dispatch(playIntro());
	};

	return (
		<div style={{ height: 'inherit', display: 'flex' }}>
			<Video
				id={videoDomId}
				src={SunBackground}
				videoType='video/mp4'
				controls={false}
				loop={false}
				style={{ objectFit: 'cover' }}
			/>

			{getFeature()}

			{intro.play ? null : (
				<FadeInOut
					action='fade-in'
					duration={0.5}
					position='absolute'
				>
					<Button
						text='Play Intro'
						style={{ position: 'absolute', top: '20px', right: '20px' }}
						onClick={() => playIntroButtonOnClick()}
					/>
				</FadeInOut>
			)}
		</div>
	);
};

export default Home;
