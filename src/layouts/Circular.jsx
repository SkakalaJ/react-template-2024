/** @format */

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'src/components/Button';

const Circular = (props) => {
	const [buttons, setButtons] = useState([]);

	useEffect(() => {
		const a = getCircularAngles(8, Math.PI / 2);
		const btn1 = getCircularPosition(150, a[0]);
		const btn2 = getCircularPosition(150, a[1]);
		const btn3 = getCircularPosition(150, a[2]);
		const btn4 = getCircularPosition(150, a[3]);
		const btn5 = getCircularPosition(150, a[4]);
		const btn6 = getCircularPosition(150, a[5]);
		const btn7 = getCircularPosition(150, a[6]);
		const btn8 = getCircularPosition(150, a[7]);
		
		const bttns = [
			<Button
				key={1}
				text='1'
				style={{ position: 'absolute', left: `${btn1.y}px`, bottom: `${btn1.x}px` }}
				onClick={() => { console.log('Button 1 clicked'); }}
			/>,
			<Button
				key={2}
				text='2'
				style={{ position: 'absolute', left: `${btn2.y}px`, bottom: `${btn2.x}px` }}
				onClick={() => { console.log('Button 2 clicked'); }}
			/>,
			<Button
				key={3}
				text='3'
				style={{ position: 'absolute', left: `${btn3.y}px`, bottom: `${btn3.x}px` }}
				onClick={() => { console.log('Button 3 clicked'); }}
			/>,
			<Button
				key={4}
				text='4'
				style={{ position: 'absolute', left: `${btn4.y}px`, bottom: `${btn4.x}px` }}
				onClick={() => { console.log('Button 4 clicked'); }}
			/>,
			<Button
				key={5}
				text='5'
				style={{ position: 'absolute', left: `${btn5.y}px`, bottom: `${btn5.x}px` }}
				onClick={() => { console.log('Button 5 clicked'); }}
			/>,
			<Button
				key={6}
				text='6'
				style={{ position: 'absolute', left: `${btn6.y}px`, bottom: `${btn6.x}px` }}
				onClick={() => { console.log('Button 5 clicked'); }}
			/>,
			<Button
				key={7}
				text='7'
				style={{ position: 'absolute', left: `${btn7.y}px`, bottom: `${btn7.x}px` }}
				onClick={() => { console.log('Button 5 clicked'); }}
			/>,
			<Button
				key={8}
				text='8'
				style={{ position: 'absolute', left: `${btn8.y}px`, bottom: `${btn8.x}px` }}
				onClick={() => { console.log('Button 5 clicked'); }}
			/>
		];

		setButtons(bttns);
	}, []);

	const getCircularPosition = (radius, angle) => {
		const x = radius * Math.cos(angle);
		const y = radius * Math.sin(angle);

		return { x, y };
	};

	const getCircularAngles = (sides, rotate) => {
		const angles = [];
		const angle = (2 * Math.PI) / sides;

		for (let i = 0; i < sides; i++) {
			angles.push(angle * i + rotate);
		}

		return angles;
	};

	// const getCircularAngles = (sides) => {
	// 	const angles = [];
	// 	const angle = (2 * Math.PI) / sides;

	// 	for (let i = 0; i < sides; i++) {
	// 		angles.push(angle * i);
	// 	}

	// 	return angles;
	// };

	return <div style={{...props.style}}>
		{buttons.map((button, index) => {
			return button;
		})}
	</div>;
};

Circular.defaultProps = {
	id: '',
	style: {},
	className: '',
};

Circular.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
};

export default Circular;
