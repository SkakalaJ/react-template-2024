/** @format */

import { useDispatch } from 'react-redux';

// Components
import Button from 'src/components/Button';
import FadeInOut from 'src/components/FadeInOut';

//Redux
import { skipIntro } from 'src/features/home/reducers/homeSlice';

const SkipIntroButton = () => {
	const dispatch = useDispatch();

	return (
		<FadeInOut
			action='fade-out'
			duration={2}
			delay={10}
			onAnimationEnd={() => dispatch(skipIntro())}
		>
			<FadeInOut
				action='fade-in'
				duration={2}
			>
				<Button
					text='Intro skip'
					style={{ margin: '25px' }}
					onClick={() => dispatch(skipIntro())}
				/>
			</FadeInOut>
		</FadeInOut>
	);
};

export default SkipIntroButton;
