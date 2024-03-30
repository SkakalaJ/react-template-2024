/** @format */

import Text from 'src/components/Text';

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
