import { loadTranslations } from '$lib/translation';

export const load = async ({ url, data }) => {
	const { pathname } = url;

	const initLocale = data.language;

	await loadTranslations(initLocale, pathname);

	return {};
};
