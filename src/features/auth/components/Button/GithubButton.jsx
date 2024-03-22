/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

// Assets
import GithubLogo from 'src/features/auth/assets/github.png';

import './styles.css';

const GithubButton = () => {
	const openGithubRepo = () => {
		window.open('https://github.com/SkakalaJ/react-template-2024', '_blank');
	};

	return (
		<Button
			className='button-auth'
			onClick={() => {
				openGithubRepo();
			}}
		>
			<Box flexDirection='row'>
				<img
					src={GithubLogo}
					alt='GitHub Logo'
					width='32px'
				/>
				<Text
					tag={'a'}
					text={'GitHub'}
				/>
			</Box>
		</Button>
	);
};

export default GithubButton;
