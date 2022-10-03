import createClient from '$lib/utils/prismicio';
import { error } from '@sveltejs/kit';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const document = await client.getByUID('page', 'home');

	if (document) {
		return { document };
	}

	throw error(404, 'Not found');
}
