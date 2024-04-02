/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import FadeInOut from 'src/components/FadeInOut';

const GithubHeaderButton = () => {

	return (
		<FadeInOut
			action='fade-in'
			duration={0.5}
		>
			<Button
				style={{ margin: '25px' }}
				elementType='a'
				href='https://github.com/SkakalaJ/react-template-2024'
				target='_blank'
			>
				<Text
					tag={'p'}
					text={'GitHub'}
				/>
			</Button>
		</FadeInOut>
	);
};

export default GithubHeaderButton;
