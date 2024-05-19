import { createClient } from '@supabase/supabase-js';
import {
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY
} from '$env/static/public';

export const supabase = createClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY
);

export async function updatePageView({
	language,
	category,
	slug
}: {
	slug: string;
	language: string;
	category: string;
}): Promise<void> {
	const endpoint = `/api/views`;

	try {
		await fetch(endpoint, {
			method: 'PUT',
			body: JSON.stringify({
				language,
				category,
				slug
			}),
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		const message =
			error instanceof Error ? error.message : 'An error occurred';
		console.error(`Update views: ${message} for ${endpoint}`);
	}
}

export async function getPageView({
	origin,
	language,
	category,
	slug
}: {
	origin: string;
	language: string;
	category: string;
	slug: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
}): Promise<number> {
	try {
		const response = await fetch(`${origin}/api/views`, {
			method: 'POST',
			body: JSON.stringify({
				language,
				category,
				slug
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		const result = await response.json();
		return result.data[`/${language}/${category}/${slug}`];
	} catch (error) {
		const message =
			error instanceof Error ? error.message : 'An error occurred';
		console.error(
			`Error ocurred when get view count for a content: ${message}`
		);
		return 0;
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getPageViews(): Promise<Record<string, number>> {
	try {
		const response = await fetch('/api/views', {
			method: 'POST',
			body: JSON.stringify({}),
			headers: { 'Content-Type': 'application/json' }
		});
		const result = await response.json();
		return result.data;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : 'An error occurred';
		console.error(
			`Error ocurred when get view count for all contents: ${message}`
		);
		return {};
	}
}
