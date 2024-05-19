import { isAvaliableCategoryForLanguage } from '$lib/helpers';

export async function handle({ event, resolve }) {
	const { language, category } = event.params;
	const isApiRoute = event.url.pathname.includes('api/');

	if (!isApiRoute && isAvaliableCategoryForLanguage(language, category)) {
		return new Response(null, {
			status: 302,
			headers: { location: `/${language}` }
		});
	}

	const response = await resolve(event);
	return response;
}
