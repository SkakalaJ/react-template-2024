/** @format */

import PropTypes from 'prop-types';

import Box from 'src/shared/components/layout/Box';
import Form from 'src/shared/components/forms/Form';
import MobileOrEmailInput from 'src/features/auth/components/forms/Input/MobileOrEmailInput';
import SetNewPasswordButton from 'src/features/auth/components/ui/Button/SetNewPasswordButton';
import AccVerifiedSuccessfullyText from 'src/features/auth/components/ui/Text/AccVerifiedSuccessfullyText';
import NewPasswordInput from '../Input/NewPasswordInput';

const NewPasswordForm = (props) => {
	return (
		<Form
			onFormSubmit={(e) => {
				props.onSuccess();
			}}
		>
			<Box style={{ marginBottom: '5px' }}>
				<MobileOrEmailInput
					value={props.verifiedMobileOrEmail}
					isReadOnly
				/>
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
