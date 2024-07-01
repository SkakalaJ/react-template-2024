/** @format */
import { useNavigate } from 'react-router-dom';

// Components
import Button from 'src/shared/components/ui/Button';
import FadeInOut from 'src/shared/components/animations/FadeInOut';
import Text from 'src/shared/components/ui/Text';

import { useDispatch, useSelector } from 'react-redux';
import { setShowHomePage } from 'src/features/user/store/userSlice';

const SignInButton = () => {
	const dispatch = useDispatch();

	const { user, showHomePage } = useSelector((state) => state.user);

	const navigate = useNavigate();

	const signInButtonClick = () => {
		if (!user) {
			navigate('/auth');
			return;
		}

		if (showHomePage === true) {
			dispatch(setShowHomePage(false));
		}

		window.location.reload();
	};

	const getButtonText = () => {
		if (user && user.email) {
			return `Sign In with email: ${user.email}`;
		}

		if (user && user.mobile) {
			return `Sign In with mobile: ${user.mobile}`;
		}

		return 'Sign In';
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
					text={getButtonText()}
				/>
			</Button>
		</FadeInOut>
	);
};

export default SignInButton;
