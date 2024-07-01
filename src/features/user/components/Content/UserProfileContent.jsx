/** @format */

import { Fragment } from 'react';
import Box from 'src/shared/components/layout/Box';
import UserProfileCard from '../Card/UserProfileCard';

const UserProfileContent = () => {
	return (
		<Fragment>
			<Box>
				<UserProfileCard />
			</Box>
		</Fragment>
	);
};

export default UserProfileContent;
