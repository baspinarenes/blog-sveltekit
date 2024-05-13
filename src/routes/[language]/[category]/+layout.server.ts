import { error } from '@sveltejs/kit';
import config from '$lib/blog.config.js';
import { ContentfulClient } from '$lib/helpers/contentful';

export async function load({ params }) {
	const { language, category } = params;
	const navigations = config.navigations[language];

	if (!navigations[category]) throw error(404);

	const client = new ContentfulClient({
		language,
		collection: category
	});

	const contents = await client.request.contents();

	return {
		category,
		contents
	};
}
