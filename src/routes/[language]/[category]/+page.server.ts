import { error } from '@sveltejs/kit';
import config from '$lib/blog.config.js';

export function load({ params }) {
	const { category } = params;
	const navigations = config.navigations.tr;

	if (!navigations[category]) throw error(404);

	return {
		category
	};
}
