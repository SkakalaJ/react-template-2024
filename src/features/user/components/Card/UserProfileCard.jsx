/** @format */

import { useSelector } from 'react-redux';
import Card from 'src/shared/components/layout/Card';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import useRobohashImage from 'src/features/user/hooks/useRobohashImage';
import Image from 'src/shared/components/ui/Image';
import Error from 'src/shared/components/errors/Error';

const UserProfileCard = () => {
	const { user } = useSelector((state) => state.user);
	const { email } = user;
	const { mobile } = user;
	const { avatar, error } = useRobohashImage((email) ? email : mobile);

	if (error) return <Error text={error.message} />;

	return (
		<Card
			width='400px'
			style={{ background: 'none', borderRadius: 'none', boxShadow: 'none' }}
		>
			<Box>
				<Text tag={'h2'} text={'Avatar'} />
				<Image style={{marginBottom: '30px'}} src={avatar} alt='User avatar' />
				<Text tag={'h2'} text={user.email} />
			</Box>
		</Card>
	);
};

export default UserProfileCard;
