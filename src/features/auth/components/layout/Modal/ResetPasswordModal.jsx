/** @format */

import { useLocation } from 'react-router-dom';

import Modal from 'src/shared/components/layout/Modal';
import Box from 'src/shared/components/layout/Box';
import ResetPasswordCard from 'src/features/auth/components/layout/Card/ResetPasswordCard';

const ResetPasswordModal = () => {
	const location = useLocation();
	const showModal = location.pathname === '/auth/password/reset';

	return (
		<Modal showModal={showModal}>
			<Box>
				<ResetPasswordCard />
			</Box>
		</Modal>
	);
};

export default ResetPasswordModal;
