/** @format */

// Components
import Button from 'src/components/Button';
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
				text='Github'
				style={{ margin: '25px' }}
				onClick={() => {
					openGithubRepo();
				}}
			/>
		</FadeInOut>
	);
};

export default GithubButton;
