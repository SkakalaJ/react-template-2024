/** @format */

import Card from 'src/components/Card';
import Box from 'src/components/Box';

import GithubButton from 'src/features/auth/components/Button/GithubButton';
import GoogleButton from '../Button/GoogleButton';
import FacebookButton from '../Button/FacebookButton';
import MicrosoftButton from '../Button/MicrosoftButton';
import RegisterButton from '../Button/RegisterButton';
import SignInLink from '../Link/SignInLink';
import JustTemplateText from 'src/features/auth/components/Text/JustTemplateText';
import OrRegisterWithText from 'src/features/auth/components/Text/OrRegisterWithText';
import SignUpHeaderText from 'src/features/auth/components/Text/SignUpHeaderText';
import MobileOrEmailInput from '../Input/MobileOrEmailInput';
import FirstNameInput from '../Input/FirstNameInput';
import LastNameInput from '../Input/LastNameInput';
import AlreadyHaveAccountText from '../Text/AlreadyHaveAccountText';
import NewPasswordInput from '../Input/NewPasswordInput';

const CardHeader = () => {
	return (
		<Box
			alignItems='start'
			style={{
				padding: '20px',
				overflow: 'auto',
				borderBottom: '1px solid #dadde1',
			}}
		>
			<SignUpHeaderText />
		</Box>
	);
};

const CardContent = () => {
	return (
		<Box style={{ padding: '20px', overflow: 'auto' }}>
			<Box
				flexDirection='row'
				style={{ marginBottom: '10px' }}
			>
				<FirstNameInput />
				<LastNameInput />
			</Box>
			<Box style={{ marginBottom: '10px' }}>
				<MobileOrEmailInput />
			</Box>
			<Box style={{ marginBottom: '10px' }}>
				<NewPasswordInput />
			</Box>

			<Box style={{ marginBottom: '10px' }}>
				<RegisterButton />
			</Box>

			<Box style={{ marginBottom: '15px' }}>
				<AlreadyHaveAccountText />
				<SignInLink />
			</Box>

			<Box
				flexDirection='row'
				height='50px'
				style={{ marginBottom: '15px' }}
			>
				<div style={{ marginTop: '5px' }}>
					<hr />
				</div>

				<div>
					<OrRegisterWithText />
				</div>

				<div style={{ marginTop: '5px' }}>
					<hr />
				</div>
			</Box>

			<Box>
				<Box
					flexDirection='row'
					style={{ marginBottom: '10px' }}
				>
					<GoogleButton />
					<GithubButton />
				</Box>
				<Box flexDirection='row'>
					<FacebookButton />
					<MicrosoftButton />
				</Box>
			</Box>
		</Box>
	);
};

const CardFooter = () => {
	return (
		<Box style={{ padding: '20px', borderTop: '1px solid #dadde1' }}>
			<JustTemplateText />
		</Box>
	);
};

const SignUpCard = () => {
	return (
		<Card width='400px'>
			<CardHeader />
			<CardContent />
			<CardFooter />
		</Card>
	);
};

export default SignUpCard;
