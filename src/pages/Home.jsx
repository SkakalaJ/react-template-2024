/** @format */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Assets
import SunBackground from 'src/assets/videos/background/pexels-matthias-groeneveld-17929837_(1080p).mp4';
//Features
import Intro from 'src/features/Home/Intro';
// Components
import Video from 'src/components/Video/Video';
import Button from 'src/components/Button/Button';
import FadeInOut from 'src/components/FadeInOut/FadeInOut';
import CircleUI from 'src/components/CircleUI/CircleUI';
import Text from 'src/components/Text/Text';
import Header from 'src/components/Header/Header';
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
				style={{ objectFit: 'cover', position: 'fixed' }}
			/>
			<div
				className='absolute-right-bottom-position'
				style={{ right: '20px', bottom: '20px' }}
			>
				<Text
					tag='p'
					className='credits-text'
					text={'Video by Matthias Groeneveld from Pexels'}
				/>
			</div>

			{getFeature()}

			{intro.play ? null : (
				<Header>
					<FadeInOut
						action='fade-in'
						duration={0.5}
						position='relative'
					>
						<Button
							text='Play Intro'
							style={{ position: 'relative', top: '20px', right: '20px' }}
							onClick={() => playIntroButtonOnClick()}
						/>
					</FadeInOut>
				</Header>
			)}
		</div>
	);
};

export default Home;
