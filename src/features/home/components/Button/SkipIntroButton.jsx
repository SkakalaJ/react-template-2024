/** @format */

import { useDispatch } from 'react-redux';

// Components
import Button from 'src/shared/components/ui/Button';
import FadeInOut from 'src/shared/components/animations/FadeInOut';
import Text from 'src/shared/components/ui/Text';

//Redux
import { skipIntro } from 'src/features/home/store/homeSlice';

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
