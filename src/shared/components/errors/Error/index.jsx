/** @format */

import PropTypes from 'prop-types';

import WarningErrorIcon from 'src/shared/assets/icons/icon-warning-error.svg';
import Text from 'src/shared/components/ui/Text';
import Image from 'src/shared/components/ui/Image';
import Box from 'src/shared/components/layout/Box';

const Error = (props) => {
	return (
		<Box
			id={props.id}
			className={props.className}
			style={props.style}
			flexDirection='column'
			alignItems='center'
			flex='none'
			width='auto'
		>
			<Box
				id={props.id}
				className={props.className}
				style={props.style}
				flexDirection='row'
				alignItems='center'
				flex='none'
			>
				<Image
					src={props.icon}
					alt='Error'
					style={{
						maxWidth: '35px',
						maxHeight: '35px',
						marginRight: '10px',
					}}
				/>
				<Text
					tag={'p'}
					formatTag='strong'
					text={props.text}
				/>
			</Box>
			<Box
				id={props.id}
				className={props.className}
				style={props.style}
				flexDirection='row'
				alignItems='center'
				flex='none'
				width='auto'
			>
				<Text
					tag={'p'}
					text={props.descr}
				/>
			</Box>
		</Box>
	);
};

Error.defaultProps = {
	style: {},
	text: 'Error!',
	descr: '',
	icon: WarningErrorIcon,
};

Error.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	icon: PropTypes.string,
	descr: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default Error;
