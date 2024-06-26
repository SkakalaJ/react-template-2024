/** @format */

// Components
import Button from 'src/shared/components/ui/Button';
import Text from 'src/shared/components/ui/Text';
import FadeInOut from 'src/shared/components/animations/FadeInOut';

const GithubButton = () => {
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

export default GithubButton;
