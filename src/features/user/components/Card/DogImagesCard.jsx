/** @format */

import Card from 'src/shared/components/layout/Card';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';

const CardHeader = () => {
	return (
		<Box
			alignItems='start'
			style={{
				padding: '20px',
				overflow: 'auto',
				borderBottom: '1px solid #dadde1',
			}}
		>
			<Text
				tag={'h3'}
				text={'Random dog images'}
			/>
		</Box>
	);
};

const CardContent = () => {
	return <Box style={{ padding: '20px', overflow: 'auto' }}>CONTENT</Box>;
};

const CardFooter = () => {
	return (
		<Box
			alignItems='center'
			style={{
				padding: '20px',
				overflow: 'auto',
				borderBottom: '1px solid #dadde1',
			}}
		>
			<Text
				tag={'p'}
				text={'Button goes here'}
			/>
		</Box>
	);
};

const DogImagesCard = () => {
	return (
		<Card
			width='400px'
			style={{ margin: '40px' }}
		>
			<CardHeader />
			<CardContent />
			<CardFooter />
		</Card>
	);
};

export default DogImagesCard;
