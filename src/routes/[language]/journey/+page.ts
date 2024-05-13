import { ContentfulClient } from '$lib/helpers/contentful.js';

export async function load({ params }) {
	const client = new ContentfulClient({ language: params.language });

	const journey = await client.request.json('journey');

	return {
		journey
	};
}
