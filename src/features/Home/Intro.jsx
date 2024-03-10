/** @format */

import { useDispatch } from 'react-redux';

// Components
import Text from 'src/components/Text';
import FadeInOut from 'src/components/FadeInOut';
import Button from 'src/components/Button';

//Redux
import { skipIntro } from 'src/features/Home/homeSlice';

const Intro = () => {
	const dispatch = useDispatch();

	return (
		<>
			<FadeInOut
				action='fade-out'
				duration={2}
				delay={10}
				position='absolute'
				onAnimationEnd={() => dispatch(skipIntro())}
			>
				<Button
					text='Intro skip'
					style={{ position: 'absolute', top: '20px', right: '20px' }}
					onClick={() => dispatch(skipIntro())}
				/>

				<div
					className='absolute-center-position'
					style={{ top: '63%' }}
				>
					<FadeInOut
						action='fade-in'
						duration={2}
						delay={2}
					>
						<Text
							tag='h1'
							className='quote-text'
							style={{ color: 'salmon' }}
							text='"The brighter the light,'
						/>
					</FadeInOut>
					<FadeInOut
						action='fade-in'
						duration={2}
						delay={2}
					>
						<Text
							tag='h1'
							className='quote-text'
							style={{ color: 'salmon' }}
							text='the darker the shadow."'
						/>
					</FadeInOut>
					<FadeInOut
						action='fade-in'
						duration={2}
						delay={6}
					>
						<Text
							tag='h2'
							style={{ color: 'salmon', marginTop: '10px' }}
							className='quote-text'
							text='- Carl Jung'
						/>
					</FadeInOut>
				</div>
			</FadeInOut>

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
		</>
	);
};

export default Intro;
