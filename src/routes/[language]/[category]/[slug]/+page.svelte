<script lang="ts">
	import { formatDate, updatePageView } from '$lib/helpers';
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import {
		CodeBlock,
		Blockquote,
		ViewCount,
		ReadingTime,
		ListItem,
		List
	} from '$lib/components';
	import { browser, dev } from '$app/environment';
	import { views } from '$lib/stores';
	import type { Content } from '$lib/types';

	export let data: {
		content: Content;
	};
	let path: string;

	$: {
		path = `/${$page.params.language}/${$page.params.category}/${$page.params.slug}`;

		if (browser && !dev) {
			views.update((value) => ({ ...value, [path]: (value[path] || 0) + 1 }));

			updatePageView({
				language: $page.params.language,
				category: $page.params.category,
				slug: $page.params.slug
			});
		}
	}
</script>

<svelte:head>
	<title>{data.content.title}</title>
</svelte:head>

{#if !data.content || !data.content.context}
	<div>Error ocurred during data fetching.</div>
{:else}
	<article class="content-container">
		<h1 class="title">{data.content.title}</h1>
		<div class="summary">
			<span>{formatDate(data.content.publishedAt, $page.params.language)}</span>
			<span class="category">
				#{$page.params.category.toLowerCase().replace('/', '-')}
			</span>
			<ViewCount {path} />
			<ReadingTime value={data.content.readingMinute} />
		</div>
		{#if data.content.coverImage}
			<img
				class="cover-image"
				src={data.content.coverImage.url}
				alt={data.content.title}
			/>
		{/if}
		<SvelteMarkdown
			source={data.content.context}
			renderers={{
				code: CodeBlock,
				blockquote: Blockquote,
				list: List,
				listitem: ListItem
			}}
		/>
	</article>
{/if}

<style lang="scss">
	.content-container {
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
		padding: 24px;

		.summary {
			display: flex;
			gap: 12px;
			font-size: 14px;
			color: var(--color-gray);
			margin-bottom: 24px;

			.category {
				margin-right: auto;
			}

			.views,
			.reading-time {
				display: flex;
				align-items: center;
				gap: var(--spacing-xs);
			}
		}

		.cover-image {
			width: 100%;
			margin-bottom: 32px;
			border-radius: 12px;
		}
	}

	@include desktop {
		.content-container {
			padding: 72px 24px 64px;

			.summary {
				margin-bottom: 32px;
			}
		}
	}
</style>
