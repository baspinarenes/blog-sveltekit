import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'tr',
			key: 'common',
			loader: async () => (await import('./tr/common.json')).default
		},
		{
			locale: 'tr',
			key: 'home',
			loader: async () => (await import('./tr/home.json')).default
		},
	]
};

export const {
	t,
	locale,
	locales,
	loading,
	loadTranslations,
	setLocale,
	initialized,
	translations
} = new i18n(config);
