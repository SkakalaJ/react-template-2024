/** @format */
import { useNavigate } from 'react-router-dom';

// Components
import Button from 'src/components/Button';
import FadeInOut from 'src/components/FadeInOut';
import Text from 'src/components/Text';

const SignInButton = () => {
	const navigate = useNavigate();

	const signInButtonClick = () => {
		navigate('/auth');
	};

	return (
		<FadeInOut
			action='fade-in'
			duration={0.5}
		>
			<Button
				style={{ margin: '25px' }}
				onClick={() => signInButtonClick()}
			>
				<Text
					tag={'a'}
					text={'Sign In'}
				/>
			</Button>
		</FadeInOut>
	);
};

export default SignInButton;
