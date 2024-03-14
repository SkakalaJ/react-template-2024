/** @format */

// Components
import Button from 'src/components/Button';
import FadeInOut from 'src/components/FadeInOut';

const SignInButton = () => {
	return (
		<FadeInOut
			action='fade-in'
			duration={0.5}
		>
			<Button
				text='Sign In'
				style={{ margin: '25px' }}
				onClick={() => {
					console.log('Sign In');
				}}
			/>
		</FadeInOut>
	);
};

export default SignInButton;
