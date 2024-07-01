/** @format */

import Card from 'src/shared/components/layout/Card';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import TextToYodaTranslateForm from 'src/features/user/components/forms/TextToYodaTranslateForm';

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
				text={'Translate Text to Yoda Language'}
			/>
		</Box>
	);
};

const CardContent = () => {
	return (
		<Box style={{ padding: '20px', overflow: 'auto' }}>
			<TextToYodaTranslateForm />
		</Box>
	);
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
				text={
					'*Free public API has ratelimit of 60 requests a day with distribution of 10 calls an hour.'
				}
			/>
		</Box>
	);
};

const TextToYodaCard = () => {
	return (
		<Card
			width='400px'
			style={{ margin: '20px' }}
		>
			<CardHeader />
			<CardContent />
			<CardFooter />
		</Card>
	);
};

export default TextToYodaCard;
