/** @format */

import { useDispatch } from 'react-redux';

// Components
import Button from 'src/components/Button';
import FadeInOut from 'src/components/FadeInOut';
import Text from 'src/components/Text';

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
					style={{ margin: '25px' }}
					onClick={() => dispatch(skipIntro())}
				>
					<Text
						tag={'a'}
						text={'Intro skip'}
					/>
				</Button>
			</FadeInOut>
		</FadeInOut>
	);
};

export default SkipIntroButton;
