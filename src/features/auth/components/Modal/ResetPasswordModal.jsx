/** @format */

import { useLocation } from 'react-router-dom';

import Modal from 'src/components/Modal';
import Box from 'src/components/Box';
import ResetPasswordCard from 'src/features/auth/components/Card/ResetPasswordCard';

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
