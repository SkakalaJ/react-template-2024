/** @format */

import Card from 'src/components/Card';
import Text from 'src/components/Text';
import Input from 'src/components/Input';

const CardHeader = () => {
	return (
		<div style={{ padding: '20px', borderBottom: '1px solid #dadde1' }}>
			<Text
				tag={'h1'}
				text={'Sign In'}
			/>
		</div>
	);
};

const CardContent = () => {
	return (
		<div style={{ padding: '20px', overflow: 'auto' }}>
			<div style={{ display: 'flex' }}>
				<Input
					style={{ marginRight: '5x', marginBottom: '10px' }}
					placeholder='First name'
				/>
				<Input
					style={{ marginLeft: '5px', marginBottom: '10px' }}
					placeholder='Last name'
				/>
			</div>
			<Input
				style={{ marginBottom: '10px' }}
				placeholder='Mobile number or email'
			/>
			<Input
				style={{ marginBottom: '10px' }}
				placeholder='New password'
			/>
			<div style={{ display: 'flex' }}>
				<hr />
				<b>
					<Text
						tag={'p'}
						text={'or register with'}
					/>
				</b>
				<hr />
			</div>
		</div>
	);
};

const CardFooter = () => {
	return (
		<div style={{ padding: '20px', borderTop: '1px solid #dadde1' }}>
			<i>
				<Text
					tag={'p'}
					text={
						'* This is just a template. No valid data required during registration.'
					}
				/>
			</i>
		</div>
	);
};

const SignInCard = () => {
	return (
		<Card
			height='400px'
			width='400px'
		>
			<CardHeader />
			<CardContent />
			<CardFooter />
		</Card>
	);
};

export default SignInCard;
