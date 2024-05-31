import { ContentfulClient } from '$lib/helpers/contentful.js';

export async function load({ params }) {
	const client = new ContentfulClient({
		language: params.language
	});

	const content = await client.request.entries();

	return {
		content
	};
}
