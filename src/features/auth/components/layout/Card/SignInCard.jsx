/** @format */

import Card from 'src/shared/components/layout/Card';
import Box from 'src/shared/components/layout/Box';

import GithubButton from 'src/features/auth/components/ui/Button/GithubButton';
import GoogleButton from '../../ui/Button/GoogleButton';
import FacebookButton from '../../ui/Button/FacebookButton';
import MicrosoftButton from '../../ui/Button/MicrosoftButton';
import JustTemplateText from 'src/features/auth/components/ui/Text/JustTemplateText';
import DontHaveAccountText from 'src/features/auth/components/ui/Text/DontHaveAccountText';
import SignUpLink from 'src/features/auth/components/ui/Link/SignUpLink';
import OrSignInWithText from 'src/features/auth/components/ui/Text/OrSignInWithText';
import SignInHeaderText from 'src/features/auth/components/ui/Text/SignInHeaderText';
import SignInForm from '../../forms/Form/SignInForm';

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
			<SignInHeaderText />
		</Box>
	);
};

const CardContent = () => {
	return (
		<Box style={{ padding: '20px', overflow: 'auto' }}>
			<Box style={{ marginBottom: '10px' }}>
				<SignInForm />
			</Box>

			<Box style={{ marginBottom: '15px' }}>
				<DontHaveAccountText />
				<SignUpLink />
			</Box>

			<Box
				flexDirection='row'
				height='50px'
				style={{ marginBottom: '15px' }}
			>
				<div style={{ marginTop: '5px' }}>
					<hr style={{ float: 'left' }} />
				</div>

				<div style={{ textAlign: 'center' }}>
					<OrSignInWithText />
				</div>

				<div style={{ marginTop: '5px' }}>
					<hr style={{ float: 'right' }} />
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

const SignInCard = () => {
	return (
		<Card width='400px'>
			<CardHeader />
			<CardContent />
			<CardFooter />
		</Card>
	);
};

export default SignInCard;
