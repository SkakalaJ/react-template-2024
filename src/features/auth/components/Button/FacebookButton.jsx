/** @format */

// Components
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Box from 'src/components/Box';

// Assets
import FacebookLogo from 'src/features/auth/assets/logos/facebook.png';

import './styles.css';

const FacebookButton = () => {
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
				<img
					display='block'
					src={FacebookLogo}
					alt='Facebook Logo'
					style={{
						maxWidth: '35px',
						maxHeight: '35px',
						objectFit: 'contain',
						marginLeft: '10px',
					}}
				/>
				<Text
					tag={'a'}
					text={'Facebook'}
					style={{ color: 'black' }}
				/>
			</Box>
		</Button>
	);
};

export default FacebookButton;
