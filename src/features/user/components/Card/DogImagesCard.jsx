/** @format */

import Card from 'src/shared/components/layout/Card';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import Image from 'src/shared/components/ui/Image';
import useRandomDogImage from 'src/features/user/hooks/useRandomDogImage';
import SphereLoader from 'src/shared/components/animations/SphereLoader';
import Error from 'src/shared/components/errors/Error';
import Button from 'src/shared/components/ui/Button';
import ReloadIcon from 'src/shared/assets/icons/icon-reload.svg';

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
	const { dogImage, loading, error, forceReload } = useRandomDogImage();

	if (loading)
		return (
			<SphereLoader
				height='100px'
				width='100px'
				margin='20px 0 20px 0'
			/>
		);
	
	if (error) return <Error text={error.message} />;

	return (
		<Box>
			<Box style={{ overflow: 'auto' }}>
				<Image
					src={dogImage}
					alt='Random dog'
					style={{ maxHeight: '300px', width: '100%' }}
					loadingComponent={
						<SphereLoader
							height='100px'
							width='100px'
							margin='20px 0 20px 0'
						/>
					}
				/>
			</Box>
			<Box
				alignItems='center'
				style={{
					overflow: 'auto',
					borderBottom: '1px solid #dadde1',
				}}
			>
				<Button
					onClick={forceReload}
					style={{ margin: '20px' }}
				>
					<Image
						src={ReloadIcon}
						alt='Reload'
						style={{ height: '20px', width: '100%' }}
					/>
				</Button>
		</Box>
	</Box>
	);
};

const DogImagesCard = () => {
	return (
		<Card
			width='400px'
			style={{ margin: '20px' }}
		>
			<CardHeader />
			<CardContent/>
		</Card>
	);
};

export default DogImagesCard;
