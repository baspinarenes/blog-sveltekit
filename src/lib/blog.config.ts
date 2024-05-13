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
			home: '/',
			journey: '/journey',
			tool: '/tool',
			article: '/article',
			snippet: '/snippet',
			writing: '/writing',
			culture: '/culture',
			thought: '/thought'
		},
		en: {
			home: '/',
			journey: '/journey',
			tool: '/tool',
			article: '/article',
			snippet: '/snippet'
		}
	},
	copyright: 'Inspired by onur.dev'
};

export default config;
