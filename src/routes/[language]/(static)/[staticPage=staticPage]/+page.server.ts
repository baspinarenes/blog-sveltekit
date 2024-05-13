import { ContentfulClient } from '$lib/helpers/contentful.js';

export async function load({ params }) {
	const client = new ContentfulClient({ language: params.language });

	const staticPage = await client.request.staticPage(params.staticPage);

	if (!staticPage) {
		return {
			status: 404,
			error: new Error('Not found')
		};
	}

	return {
		title: staticPage.title,
		contentJson: staticPage.contentJson
	};
}
