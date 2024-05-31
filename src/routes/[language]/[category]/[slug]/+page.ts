import { ContentfulClient } from '$lib/helpers/contentful.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const client = new ContentfulClient({
		language: params.language,
		collection: params.category,
		slug: params.slug
	});

	const content = await client.request.content();

	if (!content?.content && !content?.context) {
		return redirect(307, `/`);
	}

	return {
		content
	};
}
