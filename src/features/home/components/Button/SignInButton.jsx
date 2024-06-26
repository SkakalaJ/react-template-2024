/** @format */
import { useNavigate } from 'react-router-dom';

// Components
import Button from 'src/shared/components/ui/Button';
import FadeInOut from 'src/shared/components/animations/FadeInOut';
import Text from 'src/shared/components/ui/Text';

import { useDispatch, useSelector } from 'react-redux';
import { setUser, setShowHomePage } from 'src/features/user/store/userSlice';

const SignInButton = () => {
	const dispatch = useDispatch();

	const showHomePage = useSelector((state) => state.user.showHomePage);
	const user = useSelector((state) => state.user.user);

	const navigate = useNavigate();

	const signInButtonClick = () => {
		if (!user) {
			navigate('/auth');
			return;
		}

		dispatch(
			setUser({
				...user,
			}),
		);

		if (showHomePage === true) {
			dispatch(setShowHomePage(false));
		}

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
