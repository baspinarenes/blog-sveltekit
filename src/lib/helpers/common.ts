import { replaceState } from '$app/navigation';
import config from '$lib/blog.config';
import { format } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';

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
	replaceState(url, {});
}

export function setCookie(name: string, value: string) {
	document.cookie = `${name}=${value};path=/`;
}

export function formatDate(date: Date, language: string) {
	return format(date, 'MMM dd, yyyy', {
		locale: language === 'tr' ? tr : enUS
	});
}

export function orderAlphabetically(a: string, b: string) {
	return b.localeCompare(a);
}
export function calculateReadingMinute(content: string = '') {
	if (!content) return 0;
	const wordsPerMinute = 180;
	const wordCount = content.match(/\b\w+\b/g)?.length || 0;
	return Math.ceil(wordCount / wordsPerMinute);
}
