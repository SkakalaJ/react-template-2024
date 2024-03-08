/** @format */

// Components
import Video from 'src/components/Video';
import Text from 'src/components/Text';
import FadeInOut from 'src/components/FadeInOut';
import Button from 'src/components/Button';

// Assets
import SunBackground from 'src/assets/videos/background/pexels-matthias-groeneveld-17929837_(1080p).mp4';

const Intro = () => {
	return (
		<div style={{ height: 'inherit', display: 'flex' }}>
			<Video
				src={SunBackground}
				videoType='video/mp4'
				controls={false}
				loop={false}
				style={{ objectFit: 'cover' }}
			></Video>

			
			<FadeInOut
				action='fade-out'
				duration={2}
				delay={10}
				position='absolute'
			>
				<Button text='Intro skip' style={{ position: 'absolute', top: '20px', right: '20px' }} />
			</FadeInOut>

			<div
				className='absolute-center-position'
				style={{ top: '63%' }}
			>
				<FadeInOut
					action='fade-out'
					duration={2}
					delay={10}
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
				</FadeInOut>
			</div>
			
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
		</div>
	);
};

export default Intro;
