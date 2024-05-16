/* eslint-disable @typescript-eslint/no-explicit-any */
export type ContentfulContent = {
	title: string;
	description?: string;
	slug: string;
	category: string;
	content: any;
	sys: { publishedAt: string };
	context?: string;
	tags?: string[];
	coverImage?: {
		title: string;
		description: string;
		contentType: string;
		url: string;
		width: number;
		height: number;
	};
};

export type Content = {
	title: string;
	slug: string;
	publishedAt: Date;
	category: string;
	description?: string;
	views?: number;
	readingTime?: number;
	content?: any;
	context?: string;
	tags?: string[];
	contentJson?: any;
	coverImage?: {
		title: string;
		description: string;
		contentType: string;
		url: string;
		width: number;
		height: number;
	};
};

export type Journey = Record<string, JourneyItem[]>;

export type JourneyItem = {
	title: string;
	description: string;
	image?: string;
};
