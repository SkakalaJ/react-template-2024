/** @format */

// Components
import Button from 'src/shared/components/ui/Button';
import Image from 'src/shared/components/ui/Image';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import LeftArrowIcon from 'src/features/user/assets/icons/icon-arrow-left.svg';
import { useDispatch } from 'react-redux';
import { setShowHomePage } from 'src/features/user/store/userSlice';

const GoToHomePageSideMenuButton = () => {
	const dispatch = useDispatch();

	return (
		<Button
			style={{ width: '100%', padding: '7.5px 20px' }}
			elementType='div'
			className='button-side-menu-hover'
			onClick={() => {
				dispatch(setShowHomePage(true));
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
