/** @format */

import { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'src/components/Button';

// Assets
import EyeVissibleIcon from 'src/features/auth/assets/icons/eye-vissible.svg';
import EyeHiddenIcon from 'src/features/auth/assets/icons/eye-hidden.svg';

import './styles.css';

const PasswordVisibilityButton = (props) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	return (
		<Button
			className=''
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'row',
				justifyContent: 'center',
				position: 'absolute',
				height: '37px',
				width: '37px',
				right: '0px',
				cursor: 'pointer',
			}}
			onClick={() => {
				props.onClick(!isPasswordVisible);
				setIsPasswordVisible(!isPasswordVisible);
			}}
		>
			<img
				display='block'
				src={isPasswordVisible ? EyeVissibleIcon : EyeHiddenIcon}
				alt='Eye Icon'
				style={{
					maxWidth: '20px',
					maxHeight: '20px',
					objectFit: 'contain',
					opacity: `${isPasswordVisible ? '1' : '.4'}`,
				}}
			/>
		</Button>
	);
};

PasswordVisibilityButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default PasswordVisibilityButton;
