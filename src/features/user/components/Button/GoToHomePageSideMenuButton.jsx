/** @format */

// Components
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import LeftArrowIcon from 'src/features/user/assets/images/icon-arrow-left.svg';
import useLocalStorage from 'src/hooks/useLocalStorage';

const GoToHomePageSideMenuButton = () => {
	const [user, setUser] = useLocalStorage('user', null);

	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className='button-side-menu-hover'
			onClick={() => {
				setUser({
					...user,
					showHomePage: true,
				});
				window.location.reload();
			}}
		>
			<Box
				flexDirection='row'
				flex='none'
			>
				<Image
					src={LeftArrowIcon}
					alt='Left Arrow Icon'
					style={{
						width: '20px',
						height: '25px',
						marginRight: '10px',
						marginTop: '2px',
						flex: 'none',
					}}
				/>
				<Text
					tag='p'
					style={{ flex: 'none' }}
					text={'Home'}
				/>
			</Box>
		</Button>
	);
};

export default GoToHomePageSideMenuButton;
