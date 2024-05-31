import {
	PUBLIC_CONTENTFUL_SPACE_ID,
	PUBLIC_CONTENTFUL_ACCESS_TOKEN
} from '$env/static/public';
import type { Content, ContentfulContent, Journey } from '$lib/types';
import { calculateReadingMinute } from './common';

export class ContentfulClient {
	language: string;
	collection?: string;
	slug?: string;
	space = PUBLIC_CONTENTFUL_SPACE_ID;
	accessToken = PUBLIC_CONTENTFUL_ACCESS_TOKEN;

	constructor({
		language,
		collection,
		slug
	}: {
		language: string;
		collection?: string;
		slug?: string;
	}) {
		this.language = language;
		this.collection = collection;
		this.slug = slug;
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
			entries: async () => {
				const { ok, result } = await this.get(this.query.entries);

				if (!ok) return [];

				const items: Record<
					string,
					Record<'items', ContentfulContent[]>
				> = result.data;

				const mappedItems: Content[] = [];

				Object.keys(items).forEach((key: string) => {
					const filteredItems = items[key].items.filter((x) => x.context);
					mappedItems.push(
						...this.mapper.contents(
							filteredItems,
							key.replace('Collection', '')
						)
					);
				});

				return mappedItems.sort(
					(a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
				);
			},
			content: async () => {
				const { ok, result } = await this.get(this.query.category);

				if (!ok) return null;

				const item = result.data[this.collection + 'Collection'].items[0];

				return this.mapper.content(item);
			},
			contents: async () => {
				const { ok, result } = await this.get(this.query.categories);

				if (!ok) return [];

				const items: ContentfulContent[] =
					result.data[this.collection + 'Collection'].items;

				const filteredItems = items.filter((x) => x.context);
				const mappedItems = this.mapper.contents(filteredItems);

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

				return { title, contentJson };
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
			content: (item: ContentfulContent): Content => {
				return {
					title: item.title,
					description: item.description,
					category: item.category,
					publishedAt: new Date(item.sys.publishedAt),
					context: item.context,
					tags: item.tags,
					coverImage: item.coverImage,
					slug: item.slug,
					readingMinute: calculateReadingMinute(item.context)
				};
			},
			contents: (items: ContentfulContent[], type?: string): Content[] => {
				return items.map((item: ContentfulContent) => ({
					type,
					title: item.title,
					slug: item.slug,
					category: item.category,
					publishedAt: new Date(item.sys.publishedAt),
					context: item.context,
					readingMinute: calculateReadingMinute(item.context)
				}));
			},
			staticPage: (item: ContentfulContent): Content => {
				return {
					title: item.title,
					slug: item.slug,
					category: item.category,
					contentJson: item.content.json,
					readingMinute: -1,
					publishedAt: new Date(item.sys.publishedAt)
				};
			}
		};
	}

	get query() {
		return {
			entries: `
				query {	
					articleCollection {
						items {
							title
							slug
							context
							sys {
								publishedAt
							}
						}
					}
					snippetCollection {
						items {
							title
							slug
							context
							sys {
								publishedAt
							}
						}
					}
					writingCollection {
						items {
							title
							slug
							content {
								json
							}
							sys {
								publishedAt
							}
						}
					}
					thoughtCollection {
						items {
							title
							slug
							content {
								json
							}
							sys {
								publishedAt
							}
						}
					}
				}
			`,
			category: `
				query {
					${this.collection}Collection(locale: "${this.language}", where: {
						slug: "${this.slug}"
					}){
						items {
							title
							description
							category
							sys {
								publishedAt
							}
							context
							tags
						}
					}
				}
			`,
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
							context
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
