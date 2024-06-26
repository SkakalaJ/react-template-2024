/** @format */

import axios from 'axios';

import { api } from '@/lib/api-client';

export const getTeams = () => {
	return api.get('/teams');
};

export const getTeamsQueryOptions = () => {
	return queryOptions({
		queryKey: ['teams'],
		queryFn: () => getTeams(),
	});
};

export const useTeams = ({ queryConfig = {} } = {}) => {
	return useQuery({
		...getTeamsQueryOptions(),
		...queryConfig,
	});
};
