/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import FadeInOut from 'src/components/FadeInOut';

const GithubButton = () => {
	const openGithubRepo = () => {
		window.open('https://github.com/SkakalaJ/react-template-2024', '_blank');
	};

	return (
		<FadeInOut
			action='fade-in'
			duration={0.5}
		>
			<Button
				style={{ margin: '25px' }}
				onClick={() => {
					openGithubRepo();
				}}
			>
				<Text
					tag={'a'}
					text={'GitHub'}
				/>
			</Button>
		</FadeInOut>
	);
};

export default GithubButton;
