import config from '$lib/blog.config.js';
import { ContentfulClient } from '$lib/helpers/contentful';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const { language, category } = params;
	const navigations = config.navigations[language];

	if (!navigations[category]) {
		return redirect(307, `/${language}`);
	}

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
