import {
	PUBLIC_CONTENTFUL_SPACE_ID,
	PUBLIC_CONTENTFUL_ACCESS_TOKEN
} from '$env/static/public';
import type { Content, ContentfulContent, Journey } from '$lib/types';

export class ContentfulClient {
	language: string;
	collection?: string;
	space = PUBLIC_CONTENTFUL_SPACE_ID;
	accessToken = PUBLIC_CONTENTFUL_ACCESS_TOKEN;

	constructor({
		language,
		collection
	}: {
		language: string;
		collection?: string;
	}) {
		this.language = language;
		this.collection = collection;
	}

	private async get(query: string) {
		const response = await fetch(
			`https://graphql.contentful.com/content/v1/spaces/${this.space}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.accessToken}`
				},
				body: JSON.stringify({ query })
			}
		);

		return {
			ok: response.ok,
			result: await response.json()
		};
	}

	get request() {
		return {
			contents: async () => {
				const { ok, result } = await this.get(this.query.categories);

				if (!ok) return [];

				const items = result.data[this.collection + 'Collection'].items;

				const mappedItems = this.mapper.categories(items);
				return mappedItems;
			},
			staticPage: async (name: string) => {
				const { ok, result } = await this.get(this.query.staticPage);

				if (!ok) return null;

				const item = result.data.staticPageCollection.items.find(
					(item: { slug: string }) => item.slug === name
				);

				if (!item) return null;

				const { title, contentJson } = this.mapper.staticPage(item);

				return {
					title,
					contentJson
				};
			},
			json: async (name: string): Promise<Journey | null> => {
				const { ok, result } = await this.get(this.query.jsons);

				if (!ok) return null;

				const item = result.data.jsonCollection.items.find(
					(item: { key: string }) => item.key === name
				);

				if (!item) return null;

				return item.data;
			}
		};
	}

	get mapper() {
		return {
			categories: (items: ContentfulContent[]): Content[] => {
				return items.map((item: ContentfulContent) => ({
					title: item.title,
					slug: item.slug,
					publishedAt: new Date(item.sys.publishedAt),
					views: 100,
					readingTime: 5
				}));
			},
			staticPage: (item: ContentfulContent): Content => {
				return {
					title: item.title,
					slug: item.slug,
					contentJson: item.content.json,
					publishedAt: new Date(item.sys.publishedAt)
				};
			}
		};
	}

	get query() {
		return {
			categories: `
        query {
          ${this.collection}Collection(locale: "${this.language}"){
            items {
              title
              slug
							category
							sys {
								publishedAt
							}
            }
          }
        }
      `,
			staticPage: `
				query {
					staticPageCollection(locale: "${this.language}"){
						items {
							title
							slug
							sys {
								publishedAt
							}
							content {
								json
							}
						}
					}
				}
			`,
			jsons: `
				query {
					jsonCollection(locale: "${this.language}"){
						items {
							key
							data
						}
					}
				}
			`
		};
	}
}
