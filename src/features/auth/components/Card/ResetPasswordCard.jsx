/** @format */

import { useState } from 'react';

import Card from 'src/components/Card';
import Box from 'src/components/Box';

import AlreadyHaveAccountText from '../Text/AlreadyHaveAccountText';
import SignInLink from '../Link/SignInLink';
import ResetPasswordHeaderText from '../Text/ResetPasswordHeaderText';
// import ResetPasswordForm from '../Form/ResetPasswordForm';
// import NewPasswordForm from '../Form/NewPasswordForm';
import ResetPasswordWizard from '../StepWizard/ResetPasswordWizard';

const CardHeader = () => {
	return (
		<Box
			alignItems='start'
			style={{
				padding: '20px',
				overflow: 'auto',
				borderBottom: '1px solid #dadde1',
			}}
		>
			<ResetPasswordHeaderText />
		</Box>
	);
};

const CardContent = () => {
	const [success, setSuccess] = useState(false);

	return (
		<Box style={{ padding: '20px', overflow: 'auto', marginBottom: '10px' }}>
			<Box style={{ marginBottom: '10px' }}>
				<ResetPasswordWizard onSuccess={() => setSuccess(true)} />
			</Box>

			<Box>
				{!success && <AlreadyHaveAccountText />}
				<SignInLink />
			</Box>
		</Box>
	);
};

const ResetPasswordCard = () => {
	return (
		<Card width='400px'>
			<CardHeader />
			<CardContent />
		</Card>
	);
};

export default ResetPasswordCard;
