/** @format */
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'src/hooks/useLocalStorage';

// Components
import Button from 'src/components/Button';
import FadeInOut from 'src/components/FadeInOut';
import Text from 'src/components/Text';

const SignInButton = () => {
	const [user, setUser] = useLocalStorage('user', null);
	const navigate = useNavigate();

	const signInButtonClick = () => {
		if (!user) {
			navigate('/auth');
			return;
		}

		setUser({
			...user,
			showHomePage: false,
		});
		window.location.reload();
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
