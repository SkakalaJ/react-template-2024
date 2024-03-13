/** @format */

import PropTypes from 'prop-types';
import './index.css';

const FadeInOut = (props) => {
	const uuid = crypto.getRandomValues(new Uint32Array(5))[0];

	const getStyle = () => {
		switch (props.action) {
			case 'fade-in-out':
				return cssFadeInOut;
			case 'fade-in':
				return cssFadeIn;
			case 'fade-out':
				return cssFadeOut;
			default:
				return cssFadeInOut;
		}
	};

	const getClassName = () => {
		switch (props.action) {
			case 'fade-in-out':
				return `fade-in-out-element-${uuid} fade-element`;
			case 'fade-in':
				return `fade-in-element-${uuid} fade-element`;
			case 'fade-out':
				return `fade-out-element-${uuid} fade-element`;
			default:
				return 'fade-element';
		}
	};

	const cssFadeInOut = `
        .fade-in-out-element-${uuid} {
            -webkit-animation: fadeinout ${props.duration}s linear forwards;
            animation: fadeinout ${props.duration}s linear forwards;
			animation-delay: ${props.delay}s;
        }
    `;

	const cssFadeIn = `
        .fade-in-element-${uuid} {
			opacity: 0;
            -webkit-animation: fadein ${props.duration}s linear forwards;
            animation: fadein ${props.duration}s linear forwards;
			animation-delay: ${props.delay}s;
        }
    `;

	const cssFadeOut = `
        .fade-out-element-${uuid} {
            -webkit-animation: fadeout ${props.duration}s linear forwards;
            animation: fadeout ${props.duration}s linear forwards;
			animation-delay: ${props.delay}s;
        }
    `;

	return (
		<>
			<style>{getStyle()}</style>
			<div
				className={getClassName()}
				style={{ position: props.position }}
				onAnimationEnd={(e) => {
					e.stopPropagation();
					props.onAnimationEnd();
				}}
			>
				{props.children}
			</div>
		</>
	);
};

FadeInOut.defaultProps = {
	action: 'fade-in-out',
	duration: 1,
	delay: 0,
	position: 'relative',
	onAnimationEnd: () => {},
};

FadeInOut.propTypes = {
	duration: PropTypes.number,
	delay: PropTypes.number,
	action: PropTypes.string,
	children: PropTypes.node.isRequired,
	position: PropTypes.string,
	onAnimationEnd: PropTypes.func,
};

export default FadeInOut;
