/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from 'src/components/Card';
import Text from 'src/components/Text';
import Input from 'src/components/Input';
import Box from 'src/components/Box';

import GithubButton from 'src/features/auth/components/Button/GithubButton';
import GoogleButton from '../Button/GoogleButton';
import FacebookButton from '../Button/FacebookButton';
import MicrosoftButton from '../Button/MicrosoftButton';
import SignInButton from '../Button/SignInButton';
import PasswordVisibilityButton from '../Button/PasswordVisibilityButton';
import Button from 'src/components/Button';
import JustTemplateText from 'src/features/auth/components/Text/JustTemplateText';

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
			<Text
				tag={'h1'}
				text={'Sign In'}
			/>
		</Box>
	);
};

const CardContent = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	return (
		<Box style={{ padding: '20px', overflow: 'auto' }}>
			<Box style={{ marginBottom: '10px' }}>
				<Input placeholder='Mobile number or email' />
			</Box>
			<Box style={{ marginBottom: '5px' }}>
				<Input
					type={passwordVisibility ? 'text' : 'password'}
					placeholder='New password'
				/>
				<PasswordVisibilityButton
					onClick={(isPasswordVisible) =>
						setPasswordVisibility(isPasswordVisible)
					}
				/>
			</Box>

			<Box
				alignItems='flex-end'
				style={{ marginBottom: '10px' }}
			>
				<Button
					className=''
					onClick={() => {}}
				>
					<Text
						tag='a'
						text='Forgot password?'
					/>
				</Button>
			</Box>

			<Box style={{ marginBottom: '10px' }}>
				<SignInButton />
			</Box>

			<Box style={{ marginBottom: '15px' }}>
				<Text
					tag='p'
					text="Don't have an account yet?"
				/>
				<Link to='/auth/sign-up'>Register now</Link>
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
					<Text
						tag={'p'}
						formatTag='b'
						text={'or sign in with'}
					/>
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
