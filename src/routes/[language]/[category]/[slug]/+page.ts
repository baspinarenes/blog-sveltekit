import { ContentfulClient } from '$lib/helpers/contentful.js';

export async function load({ params }) {
	const client = new ContentfulClient({
		language: params.language,
		collection: params.category,
		slug: params.slug
	});

	const content = await client.request.content();

	return {
		content
	};
}
