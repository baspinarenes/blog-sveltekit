export type ContentfulContent = {
	title: string;
	slug: string;
	category: string;
	content: any;
	sys: { publishedAt: string };
};

export type Content = {
	title: string;
	slug: string;
	publishedAt: Date;
	category: string;
	views?: number;
	readingTime?: number;
	content?: any;
	contentJson?: any;
};

export type Journey = Record<string, JourneyItem>;

export type JourneyItem = {
	title: string;
	description: string;
	image?: string;
};
