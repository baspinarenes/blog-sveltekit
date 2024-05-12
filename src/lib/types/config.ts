export type Config = {
	title: string;
	author: {
		name: string;
		title: string;
		age: number;
		email: string;
		socials: Record<SocialPlatform, Social>;
	};
	fallbackLanguage: string;
	languages: string[];
	navigations: Record<string, Record<string, string>>;
	copyright: string;
};

export type SocialPlatform = 'twitter' | 'github' | 'linkedin' | 'youtube';

export type Social = {
	username: string;
	url: string;
};
