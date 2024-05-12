import config from '$lib/blog.config';

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isExternal(url: string) {
	return /^(https?:)?\/\//.test(url);
}

export function isAvaliableCategoryForLanguage(
	category?: string,
	language?: string
) {
	return (
		category &&
		language &&
		config.navigations[language] &&
		!Object.keys(config.navigations[language]).includes(category)
	);
}

export function replaceUrl(url: string) {
	window.history.replaceState({}, '', url);
}

export function setCookie(name: string, value: string) {
	document.cookie = `${name}=${value};path=/`;
}

export function formatDate(date: Date, language: string) {
	return date.toLocaleDateString(language, {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}
