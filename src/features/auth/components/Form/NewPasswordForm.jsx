/** @format */

import PropTypes from 'prop-types';

import Box from 'src/components/Box';
import Form from 'src/components/Form';
import MobileOrEmailInput from 'src/features/auth/components/Input/MobileOrEmailInput';
import SetNewPasswordButton from 'src/features/auth/components/Button/SetNewPasswordButton';
import AccVerifiedSuccessfullyText from 'src/features/auth/components/Text/AccVerifiedSuccessfullyText';
import NewPasswordInput from '../Input/NewPasswordInput';

const NewPasswordForm = (props) => {

	return (
		<Form
			onFormSubmit={(e) => {
				props.onSuccess();
			}}
		>
			<Box style={{ marginBottom: '5px' }}>
				<MobileOrEmailInput value={props.verifiedMobileOrEmail} isReadOnly/>
			</Box>

			<Box
				alignItems='start'
				style={{ marginBottom: '10px' }}
			>
				<AccVerifiedSuccessfullyText />
			</Box>

			<Box style={{ marginBottom: '15px' }}>
				<NewPasswordInput />
			</Box>

			<Box>
				<SetNewPasswordButton />
			</Box>
		</Form>
	);
};

NewPasswordForm.propTypes = {
	verifiedMobileOrEmail: PropTypes.string,
	onSuccess: PropTypes.func,
};

export default NewPasswordForm;
