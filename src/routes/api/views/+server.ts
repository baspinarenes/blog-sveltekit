/* eslint-disable @typescript-eslint/no-explicit-any */
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/helpers/supabase';
import type { RequestHandler } from '@sveltejs/kit';
import type { PostgrestResponse } from '@supabase/supabase-js';

export const PUT: RequestHandler = async ({ request }) => {
	const params = await request.json();

	await supabase.rpc('update_views', {
		page_language: params.language,
		page_category: params.category,
		page_slug: params.slug
	});

	return json({
		success: true,
		content: `/${params.language}/${params.category}/${params.slug}`
	});
};

export const POST: RequestHandler = async ({ request }) => {
	const params = await request.json();
	let response: PostgrestResponse<any[]>;

	if (!params || Object.keys(params).length === 0) {
		response = await supabase.from('analytics').select('*');
	} else {
		response = await supabase
			.from('analytics')
			.select('*')
			.filter('slug', 'eq', params.slug)
			.filter('language', 'eq', params.language)
			.filter('category', 'eq', params.category);
	}

	if (!response.data || response.data.length === 0) {
		return json({ data: {} });
	}

	const contentViewMap = response.data.reduce(
		(acc: Record<string, number>, content: any) => {
			const { language, category, slug, views } = content;
			acc[`/${language}/${category}/${slug}`] = views;
			return acc;
		},
		{}
	);

	return json({ data: contentViewMap });
};
