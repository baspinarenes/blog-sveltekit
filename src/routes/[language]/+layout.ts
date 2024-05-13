import { loadTranslations } from '$lib/i18n';

export const load = async ({ url, params }) => {
	const { pathname } = url;
	const initLocale = params.language;
	await loadTranslations(initLocale, pathname);

	return {};
};
