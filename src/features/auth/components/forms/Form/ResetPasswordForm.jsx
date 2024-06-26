/** @format */

import PropTypes from 'prop-types';

import Box from 'src/shared/components/layout/Box';
import Form from 'src/shared/components/forms/Form';
import MobileOrEmailInput from 'src/features/auth/components/forms/Input/MobileOrEmailInput';
import ResetPasswordButton from 'src/features/auth/components/ui/Button/ResetPasswordButton';
import ResetPasswordInputDescriptionText from 'src/features/auth/components/ui/Text/ResetPasswordInputDescriptionText';

const ResetPasswordForm = (props) => {
	const onMobileOrEmail = (value) => {
		props.onSuccess(value);
	};

	return (
		<Form
			onFormSubmit={(e) => {
				onMobileOrEmail(e.target.mobileOrEmail.value);
			}}
		>
			<Box style={{ marginBottom: '5px' }}>
				<MobileOrEmailInput />
			</Box>

			<Box
				alignItems='start'
				style={{ marginBottom: '15px' }}
			>
				<ResetPasswordInputDescriptionText />
			</Box>

			<Box>
				<ResetPasswordButton />
			</Box>
		</Form>
	);
};

ResetPasswordForm.propTypes = {
	onSuccess: PropTypes.func,
};

export default ResetPasswordForm;
