/** @format */

import { Fragment, Children } from 'react';

import PropTypes from 'prop-types';

const StepWizard = (props) => {

	const renderStep = () => {
		const step = props.goToStep ? props.goToStep : props.initialStep;

		props.onStepChange && props.onStepChange(step);

		const childs = Children.toArray(props.children);
		return childs[step - 1];
	};

	return <Fragment>{renderStep()}</Fragment>;
};

StepWizard.defaultProps = {
	style: {},
	initialStep: 1,
	onStepChange: () => {},
};

StepWizard.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	initialStep: PropTypes.number,
	goToStep: PropTypes.number,
	onStepChange: PropTypes.func,
};

export default StepWizard;
