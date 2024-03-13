/** @format */

import { useDispatch } from 'react-redux';

// Components
import Text from 'src/components/Text/Text';
import FadeInOut from 'src/components/FadeInOut/FadeInOut';
import Button from 'src/components/Button/Button';
import Header from 'src/components/Header/Header';

//Redux
import { skipIntro } from 'src/features/Home/homeSlice';

const Intro = () => {
	const dispatch = useDispatch();

	return (
		<>
			<FadeInOut
				action='fade-out'
				duration={2}
				delay={300}
				position='absolute'
				onAnimationEnd={() => dispatch(skipIntro())}
			>
				<Header justifyContent='flex-end'>
					<Button
						text='Intro skip'
						style={{ marginRight: '25px' }}
						onClick={() => dispatch(skipIntro())}
					/>
				</Header>

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
		</>
	);
};

export default Intro;
