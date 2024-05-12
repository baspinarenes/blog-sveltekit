import type { Config } from '$lib/types';

const config: Config = {
	title: 'Enes Başpınar',
	author: {
		name: 'Enes Başpınar',
		title: 'Software Engineer',
		age: new Date().getFullYear() - 1999,
		email: 'ensbaspinar@gmail.com',
		socials: {
			twitter: {
				username: 'enesbaspinar',
				url: 'https://twitter.com/ensbaspinar'
			},
			github: {
				username: 'enesbaspinar',
				url: 'https://github.com/baspinarenes'
			},
			linkedin: {
				username: 'enesbaspinar',
				url: 'https://www.linkedin.com/in/enesbaspinar'
			},
			youtube: {
				username: '@ensbaspinar',
				url: 'https://youtube.com/@ensbaspinar'
			}
		}
	},
	fallbackLanguage: 'en',
	languages: ['tr', 'en'],
	navigations: {
		tr: {
			home: '/tr',
			journey: '/tr/journey',
			tool: '/tr/tool',
			article: '/tr/article',
			snippet: '/tr/snippet',
			writing: '/tr/writing',
			culture: '/tr/culture'
		},
		en: {
			home: '/en',
			journey: '/en/journey',
			tool: '/en/tool',
			article: '/en/article',
			snippet: '/en/snippet'
		}
	},
	copyright: 'Inspired by onur.dev'
};

export default config;
