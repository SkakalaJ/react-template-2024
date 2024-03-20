/** @format */

import Card from 'src/components/Card';
import Text from 'src/components/Text';

const CardHeader = () => {
	return (
		<div>
			<h1>Sign In</h1>
		</div>
	);
};

const CardContent = () => {
	return (
		<div>
			<Text
				tag={'p'}
				text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
				posuere enim. Cras aliquam, arcu a euismod porttitor, sem enim iaculis
				eros, eu vehicula ante est ut lorem. Vestibulum nisl ligula, sodales
				feugiat augue at, dapibus semper libero. Phasellus suscipit sem quis
				fermentum dignissim. Aliquam varius nec felis quis gravida. Cras
				scelerisque luctus turpis a dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
				posuere enim. Cras aliquam, arcu a euismod porttitor, sem enim iaculis
				eros, eu vehicula ante est ut lorem. Vestibulum nisl ligula, sodales
				feugiat augue at, dapibus semper libero. Phasellus suscipit sem quis
				fermentum dignissim. Aliquam varius nec felis quis gravida. Cras
				scelerisque luctus turpis a dictum.`}
			/>
		</div>
	);
};

const CardFooter = () => {
	return (
		<div>
			<Text
				tag={'p'}
				text={'Sign Up'}
			/>
		</div>
	);
};

const SignInCard = () => {
	return (
		<Card
			height='400px'
			width='400px'
		>
			<CardHeader />
			<CardContent />
			<CardFooter />
		</Card>
	);
};

export default SignInCard;
