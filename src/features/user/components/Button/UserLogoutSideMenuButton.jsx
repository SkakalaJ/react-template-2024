/** @format */

// Components
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import LogoutIcon from 'src/features/user/assets/images/icon-user-logout.svg';
import { clearLocalStorage } from 'src/hooks/useLocalStorage';

const UserLogoutSideMenuButton = () => {
	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className='button-side-menu-hover'
			onClick={() => {
				clearLocalStorage();
				window.location.reload();
			}}
		>
			<Box
				flexDirection='row'
				flex='none'
			>
				<Image
					src={LogoutIcon}
					alt='User Logout Icon'
					style={{
						width: '25px',
						height: '25px',
						marginRight: '10px',
						flex: 'none',
					}}
				/>
				<Text
					tag='p'
					style={{ flex: 'none' }}
					text={'Logout'}
				/>
			</Box>
		</Button>
	);
};

export default UserLogoutSideMenuButton;
