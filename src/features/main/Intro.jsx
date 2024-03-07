/** @format */

// Components
import Video from 'src/components/Video';
import Text from 'src/components/Text';

// Assets
import SunBackground from 'src/assets/videos/background/pexels-matthias-groeneveld-17929837_(1080p).mp4';

const Intro = () => {
	return (
		<div style={{height: 'inherit'}}>
			<Video
				src={SunBackground}
				videoType='video/mp4'
				controls={false}
				loop={false}
				style={{ objectFit: 'cover' }}
			>
			</Video>
			<div style={{position: 'absolute', top: '70%', width: '100%', textAlign: 'center'}}>
				<Text style={{margin: '0'}}>AAAA</Text>
			</div>
		</div>
	);
};

export default Intro;
