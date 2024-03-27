/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';
import Image from 'src/components/Image';

// Assets
import GoogleLogo from 'src/features/auth/assets/logos/google.png';

import './styles.css';

const GoogleButton = () => {
	// const openGithubRepo = () => {
	// 	window.open('https://github.com/SkakalaJ/react-template-2024', '_blank');
	// };

	return (
		<Button
			className='button-auth'
			style={{ marginRight: '10px' }}
			onClick={() => {
				// openGithubRepo();
			}}
		>
			<Box flexDirection='row'>
				<Image
					src={GoogleLogo}
					alt='Google Logo'
					style={{
						maxWidth: '35px',
						maxHeight: '35px',
						marginLeft: '10px',
					}}
				/>
				<Text
					tag={'a'}
					text={'Google'}
					style={{ color: 'black' }}
				/>
			</Box>
		</Button>
	);
};

export default GoogleButton;
