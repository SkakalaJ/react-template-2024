/** @format */

import Text from 'src/shared/components/ui/Text';

const AccVerifiedSuccessfullyText = () => {
	return (
		<Text
			style={{ color: 'green', fontSize: 'small', marginLeft: '5px' }}
			tag={'p'}
			text={'Account verified successfully.'}
		/>
	);
};

export default AccVerifiedSuccessfullyText;
