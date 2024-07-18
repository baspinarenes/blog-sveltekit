import config from '$lib/blog.config.js';
import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	// const language = url.pathname.split('/')[1];
	/// BU KISMI YAZ. URL VE COOKIE DEGERINE BAKILACAK.

	if (!config.languages.some((l) => url.pathname.includes(`/${l}`))) {
		redirect(307, `/${config.languages[0]}${url.pathname}`);
	}
}
