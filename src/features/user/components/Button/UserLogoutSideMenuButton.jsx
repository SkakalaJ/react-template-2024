/** @format */

// Components
import Button from 'src/shared/components/ui/Button';
import Image from 'src/shared/components/ui/Image';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import LogoutIcon from 'src/features/user/assets/icons/icon-user-logout.svg';
import { clearLocalStorage } from 'src/shared/hooks/useLocalStorage';

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
