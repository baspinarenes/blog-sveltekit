export async function load({ cookies }) {
	const language = cookies.get('language') || 'en';

	return {
		language
	};
}
