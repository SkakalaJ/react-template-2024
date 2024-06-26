/** @format */

// Components
import Button from 'src/shared/components/ui/Button';
import Text from 'src/shared/components/ui/Text';
import Box from 'src/shared/components/layout/Box';
import Image from 'src/shared/components/ui/Image';

// Assets
import GithubLogo from 'src/features/auth/assets/logos/github.png';

import './styles.css';

const GithubButton = () => {
	return (
		<Button
			elementType='a'
			href='https://github.com/SkakalaJ/react-template-2024'
			target='_blank'
			className='button-auth'
			style={{ marginLeft: '10px' }}
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
					style={{ color: 'salmon' }}
					tag={'p'}
					text={'GitHub'}
				/>
			</Box>
		</Button>
	);
};

export default GithubButton;
