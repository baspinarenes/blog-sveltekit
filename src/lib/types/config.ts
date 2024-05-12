export type Config = {
	title: string;
	author: {
		name: string;
		title: string;
		age: number;
		email: string;
		socials: Record<SocialPlatform, Social>;
	};
	languages: string[];
	navigations: Record<Language, Record<string, string>>;
	copyright: string;
};

export type Language = 'tr' | 'en';

export type SocialPlatform = 'twitter' | 'github' | 'linkedin' | 'youtube';

export type Social = {
	username: string;
	url: string;
};
