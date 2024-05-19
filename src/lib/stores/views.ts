import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getPageViews } from '$lib/helpers/supabase';

if (browser) {
	getPageViews().then((result) => {
		views.set(result);
	});
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const views = writable<Record<string, number>>({});
