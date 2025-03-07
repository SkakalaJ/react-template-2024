/** @format */

// Components
import Text from 'src/shared/components/ui/Text';
import FadeInOut from 'src/shared/components/animations/FadeInOut';

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
				style={{ margin: '25px', color: 'antiquewhite' }}
			/>
		</FadeInOut>
	);
};

export default VideoCreditsText;
