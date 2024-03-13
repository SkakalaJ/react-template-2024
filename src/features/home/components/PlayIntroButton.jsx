/** @format */

import { useDispatch, useSelector } from 'react-redux';

// Components
import Button from 'src/components/Button';
import FadeInOut from 'src/components/FadeInOut';

//Redux
import { playIntro } from 'src/features/home/reducers/homeSlice';

const SkipIntroButton = () => {
	const intro = useSelector((state) => state.home.intro);

	const dispatch = useDispatch();

	const playIntroButtonOnClick = () => {
		if (!intro.videoId) return;

		const videoDom = document.getElementById(intro.videoId);
		videoDom.currentTime = 0;
		videoDom.play();
		dispatch(playIntro());
	};

	return (
		<FadeInOut
			action='fade-in'
			duration={0.5}
		>
			<Button
				text='Play Intro'
				style={{ margin: '25px' }}
				onClick={() => playIntroButtonOnClick()}
			/>
		</FadeInOut>
	);
};

export default SkipIntroButton;
