/** @format */

// Components
import Text from 'src/components/Text';
import FadeInOut from 'src/components/FadeInOut';

const VideoCreditsText = () => {
	return (
		<FadeInOut
			action='fade-in'
			duration={2}
		>
			<Text
				tag='a'
				href='https://www.pexels.com/video/light-sea-dawn-landscape-17929837/'
				className='credits-text'
				text={'Video by Matthias Groeneveld from Pexels'}
				style={{ margin: '25px' }}
			/>
		</FadeInOut>
	);
};

export default VideoCreditsText;
