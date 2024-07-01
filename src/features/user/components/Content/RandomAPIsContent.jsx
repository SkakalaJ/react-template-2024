/** @format */

import { Fragment } from 'react';

import CatFactCard from 'src/features/user/components/Card/CatFactCard';
import DogImagesCard from '../Card/DogImagesCard';
import IpInfoCard from '../Card/IpInfoCard';
import TextToYodaCard from '../Card/TextToYodaCard';
import Box from 'src/shared/components/layout/Box';

const RandomAPIsContent = () => {
	return (
		<Fragment>
			<Box
				flex='none'
				flexDirection='row'
				alignItems='start'
				justifyContent='center'
			>
				<Box
					flex='none'
					width='auto'
				>
					<DogImagesCard />
					<IpInfoCard />
				</Box>
				<Box
					flex='none'
					width='auto'
				>
					<CatFactCard />
					<TextToYodaCard />
				</Box>
			</Box>
		</Fragment>
	);
};

export default RandomAPIsContent;
