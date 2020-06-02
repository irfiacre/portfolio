import http from '../helpers/httpHandle';

export const exampleService = async data => {
	const response = await http(data, 'METHOD', 'URL');

	return response.json();
};
