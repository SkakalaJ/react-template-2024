/** @format */

import Text from 'src/shared/components/ui/Text';

const ResetPasswordInputDescriptionText = () => {
	return (
		<Text
			style={{ color: 'gray', fontSize: 'small', marginLeft: '5px' }}
			tag={'p'}
			text={'Enter already verified email or mobile number.'}
		/>
	);
};

export default ResetPasswordInputDescriptionText;
