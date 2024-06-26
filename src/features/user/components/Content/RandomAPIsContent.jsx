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
			>
				<DogImagesCard />
				<CatFactCard />
			</Box>
			<Box
				flex='none'
				flexDirection='row'
			>
				<TextToYodaCard />
				<IpInfoCard />
			</Box>
		</Fragment>
	);
};

export default RandomAPIsContent;
