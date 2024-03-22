/** @format */

import Card from 'src/components/Card';
import Text from 'src/components/Text';
import Input from 'src/components/Input';
import Box from 'src/components/Box';

import GithubButton from 'src/features/auth/components/Button/GithubButton';
import GoogleButton from '../Button/GoogleButton';
import FacebookButton from '../Button/FacebookButton';
import MicrosoftButton from '../Button/MicrosoftButton';

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
	return (
		<Box style={{ padding: '20px', overflow: 'auto' }}>
			<Box flexDirection='row'>
				<Input
					style={{ marginRight: '5x', marginBottom: '10px' }}
					placeholder='First name'
				/>
				<Input
					style={{ marginLeft: '5px', marginBottom: '10px' }}
					placeholder='Last name'
				/>
			</Box>
			<Box>
				<Input
					style={{ marginBottom: '10px' }}
					placeholder='Mobile number or email'
				/>
			</Box>
			<Box>
				<Input
					style={{ marginBottom: '10px' }}
					placeholder='New password'
				/>
			</Box>
			<Box
				flexDirection='row'
				height='50px'
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
				<GoogleButton />
				<GithubButton />
				<FacebookButton />
				<MicrosoftButton />
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
