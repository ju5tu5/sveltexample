import * as prismic from '@prismicio/client';

const repositoryName = import.meta.env.VITE_PRISMIC_REPOSITORY;
const accessToken = import.meta.env.VITE_PRISMIC_ACCESS_TOKEN;

const routes = [
	{
		type: 'page',
		uid: 'home',
		path: '/'
	},
	{
		type: 'page',
		path: '/:uid'
	}
];

const createClient = ({ request, fetch } = {}) => {
	const clientOptions = {
		fetch,
		routes
	};
	const client = prismic.createClient(repositoryName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
