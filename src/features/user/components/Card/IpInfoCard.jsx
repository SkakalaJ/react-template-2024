/** @format */

import Card from 'src/shared/components/layout/Card';
import Box from 'src/shared/components/layout/Box';
import Text from 'src/shared/components/ui/Text';
import useYourIpInfo from 'src/features/user/hooks/useYourIpInfo';
import SphereLoader from 'src/shared/components/animations/SphereLoader';
import Error from 'src/shared/components/errors/Error';

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
				text={'Your IP Info'}
			/>
		</Box>
	);
};

const CardContent = () => {
	const { ipInfo, loading, error } = useYourIpInfo();

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
		<Box style={{ padding: '20px', overflow: 'auto' }}>
			<Box flexDirection='row'>
				<Text
					tag={'p'}
					formatTag='b'
					text={'Your IP: '}
				/>
				<Text
					tag={'p'}
					text={ipInfo.query}
				/>
			</Box>

			<Box flexDirection='row'>
				<Text
					tag={'p'}
					formatTag='b'
					text={'City: '}
				/>
				<Text
					tag={'p'}
					text={ipInfo.city}
				/>
			</Box>

			<Box flexDirection='row'>
				<Text
					tag={'p'}
					formatTag='b'
					text={'Country: '}
				/>
				<Text
					tag={'p'}
					text={ipInfo.country}
				/>
			</Box>

			<Box flexDirection='row'>
				<Text
					tag={'p'}
					formatTag='b'
					text={'Lat, Lon: '}
				/>
				<Text
					tag={'p'}
					text={`${ipInfo.lat}, ${ipInfo.lon}`}
				/>
			</Box>

			<Box flexDirection='row'>
				<Text
					tag={'p'}
					formatTag='b'
					text={'ISP: '}
				/>
				<Text
					tag={'p'}
					text={ipInfo.isp}
				/>
			</Box>

			<Box flexDirection='row'>
				<Text
					tag={'p'}
					formatTag='b'
					text={'Region: '}
				/>
				<Text
					tag={'p'}
					text={ipInfo.regionName}
				/>
			</Box>

			<Box flexDirection='row'>
				<Text
					tag={'p'}
					formatTag='b'
					text={'ZIP: '}
				/>
				<Text
					tag={'p'}
					text={ipInfo.zip}
				/>
			</Box>
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
					'*This IP information is obtained from a third-party API and may not be accurate. In this template no information about your location is persistently stored anywhere.'
				}
			/>
		</Box>
	);
};

const IpInfoCard = () => {
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

export default IpInfoCard;
