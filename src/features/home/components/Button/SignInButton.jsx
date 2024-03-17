/** @format */
import { useNavigate } from 'react-router-dom';

// Components
import Button from 'src/components/Button';
import FadeInOut from 'src/components/FadeInOut';

const SignInButton = () => {
	const navigate = useNavigate();

	const signInButtonClick = () => {
		navigate('/auth/sign-in');
	};

	return (
		<FadeInOut
			action='fade-in'
			duration={0.5}
		>
			<Button
				text='Sign In'
				style={{ margin: '25px' }}
				onClick={() => signInButtonClick()}
			/>
		</FadeInOut>
	);
};

export default SignInButton;
