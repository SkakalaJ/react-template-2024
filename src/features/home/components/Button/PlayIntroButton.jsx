/** @format */

import { useDispatch, useSelector } from 'react-redux';

// Components
import Button from 'src/shared/components/ui/Button';
import FadeInOut from 'src/shared/components/animations/FadeInOut';
import Text from 'src/shared/components/ui/Text';

//Redux
import { playIntro } from 'src/features/home/store/homeSlice';

const PlayIntroButton = () => {
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
				style={{ margin: '25px' }}
				onClick={() => playIntroButtonOnClick()}
			>
				<Text
					tag={'a'}
					text={'Play Intro'}
				/>
			</Button>
		</FadeInOut>
	);
};

export default PlayIntroButton;
