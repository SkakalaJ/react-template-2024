/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';
import Image from 'src/components/Image';

// Assets
import GithubLogo from 'src/features/auth/assets/logos/github.png';

import './styles.css';

const GithubButton = () => {
	const openGithubRepo = () => {
		window.open('https://github.com/SkakalaJ/react-template-2024', '_blank');
	};

	return (
		<Button
			className='button-auth'
			style={{ marginLeft: '10px' }}
			onClick={() => {
				openGithubRepo();
			}}
		>
			<Box flexDirection='row'>
				<Image
					src={GithubLogo}
					alt='GitHub Logo'
					style={{
						maxWidth: '35px',
						maxHeight: '35px',
						marginLeft: '10px',
					}}
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
