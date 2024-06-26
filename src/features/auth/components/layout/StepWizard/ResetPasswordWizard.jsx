/** @format */

import PropTypes from 'prop-types';

import StepWizard from 'src/shared/components/layout/StepWizard';
import { useState } from 'react';
import Image from 'src/shared/components/ui/Image';
import GreenCheckmarkIcon from 'src/features/auth/assets/icons/green-checkmark.svg';
import ResetPasswordForm from 'src/features/auth/components/forms/Form/ResetPasswordForm';
import NewPasswordForm from 'src/features/auth/components/forms/Form/NewPasswordForm';

const ResetPasswordWizard = (props) => {
	const [verifiedMobileOrEmail, setVerifiedMobileOrEmail] = useState('');
	const [currentStep, setCurrentStep] = useState(1);

	const onSuccess = () => {
		props.onSuccess();
	};

	return (
		<StepWizard
			initialStep={currentStep}
			onStepChange={(value) => {
				console.log(value);
			}}
		>
			<ResetPasswordForm
				onSuccess={(value) => {
					setVerifiedMobileOrEmail(value);
					setCurrentStep(currentStep + 1);
				}}
			/>
			<NewPasswordForm
				verifiedMobileOrEmail={verifiedMobileOrEmail}
				onSuccess={() => setCurrentStep(currentStep + 1)}
			/>
			<Image
				src={GreenCheckmarkIcon}
				alt='Green Checkmark Icon'
				style={{
					maxWidth: '35px',
					maxHeight: '35px',
				}}
				onLoad={() => onSuccess()}
			/>
		</StepWizard>
	);
};

ResetPasswordWizard.propTypes = {
	onSuccess: PropTypes.func,
};

export default ResetPasswordWizard;
