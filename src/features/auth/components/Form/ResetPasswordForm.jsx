/** @format */

import PropTypes from 'prop-types';

import Box from 'src/components/Box';
import Form from 'src/components/Form';
import MobileOrEmailInput from 'src/features/auth/components/Input/MobileOrEmailInput';
import ResetPasswordButton from 'src/features/auth/components/Button/ResetPasswordButton';
import ResetPasswordInputDescriptionText from 'src/features/auth/components/Text/ResetPasswordInputDescriptionText';

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
