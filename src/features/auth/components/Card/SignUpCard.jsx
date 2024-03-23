/** @format */

import { useState } from 'react';

import Card from 'src/components/Card';
import Text from 'src/components/Text';
import Input from 'src/components/Input';
import Box from 'src/components/Box';

import GithubButton from 'src/features/auth/components/Button/GithubButton';
import GoogleButton from '../Button/GoogleButton';
import FacebookButton from '../Button/FacebookButton';
import MicrosoftButton from '../Button/MicrosoftButton';
import RegisterButton from '../Button/RegisterButton';
import PasswordVisibilityButton from '../Button/PasswordVisibilityButton';

import './styles.css';

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
				text={'Sign Up'}
			/>
		</Box>
	);
};

const CardContent = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	return (
		<Box style={{ padding: '20px', overflow: 'auto' }}>
			<Box
				flexDirection='row'
				style={{ marginBottom: '10px' }}
			>
				<Input
					style={{ marginRight: '5x' }}
					placeholder='First name'
				/>
				<Input
					style={{ marginLeft: '5px' }}
					placeholder='Last name'
				/>
			</Box>
			<Box style={{ marginBottom: '10px' }}>
				<Input placeholder='Mobile number or email' />
			</Box>
			<Box style={{ marginBottom: '10px' }}>
				<Input
					type={passwordVisibility ? 'text' : 'password'}
					placeholder='New password'
				/>
				<PasswordVisibilityButton onClick={(isPasswordVisible) => setPasswordVisibility(isPasswordVisible)}/>
			</Box>

			<Box style={{ marginBottom: '10px' }}>
				<RegisterButton />
			</Box>

			<Box style={{ marginBottom: '15px' }}>
				<Text
					tag='p'
					text="Already have an account? Sign in"
				/>
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
					<b>
						<Text
							tag={'p'}
							text={'or register with'}
						/>
					</b>
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
			<i>
				<Text
					tag={'p'}
					text={
						'* This is just a template. No valid data required during registration.'
					}
				/>
			</i>
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
