/** @format */

// Components
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import Box from 'src/components/Box';
import GitHubLogoWhiteImage from 'src/features/user/assets/images/github-logo-white.png';
import GitHubMarkWhiteImage from 'src/features/user/assets/images/github-mark-white.svg';

const GithubHeaderButton = () => {
	return (
		<Button
			style={{ margin: '25px' }}
			elementType='a'
			className=''
			href='https://github.com/SkakalaJ/react-template-2024'
			target='_blank'
		>
			<Box flexDirection='row'>
				<Image
					src={GitHubLogoWhiteImage}
					alt='GitHub Text Logo'
					style={{ width: '90px', height: '50px' }}
				/>
				<Image
					src={GitHubMarkWhiteImage}
					alt='GitHub Invertocat Logo'
					style={{ width: '45px', height: '45px' }}
				/>
			</Box>
		</Button>
	);
};

export default GithubHeaderButton;
