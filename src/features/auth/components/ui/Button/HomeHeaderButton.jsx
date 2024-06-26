/** @format */
import { useNavigate } from 'react-router-dom';

// Components
import Button from 'src/shared/components/ui/Button';
import FadeInOut from 'src/shared/components/animations/FadeInOut';
import Text from 'src/shared/components/ui/Text';

const HomeHeaderButton = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/');
	};

	return (
		<FadeInOut
			action='fade-in'
			duration={0.5}
		>
			<Button
				style={{ margin: '25px' }}
				onClick={() => onClick()}
			>
				<Text
					tag={'a'}
					text={'Home'}
				/>
			</Button>
		</FadeInOut>
	);
};

export default HomeHeaderButton;
