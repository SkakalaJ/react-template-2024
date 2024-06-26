/** @format */

import Card from 'src/shared/components/layout/Card';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import useRandomCatFact from 'src/shared/hooks/useRandomCatFact';

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
				text={'Facts about cats'}
			/>
		</Box>
	);
};

const CardContent = () => {
	const { catFact, loading, error } = useRandomCatFact();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching cat fact: {error.message}</p>;

	return <Box style={{ padding: '20px', overflow: 'auto' }}>{catFact}</Box>;
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

const CatFactCard = () => {
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

export default CatFactCard;
