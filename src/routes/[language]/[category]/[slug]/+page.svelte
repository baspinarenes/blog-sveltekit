<script lang="ts">
	import { onDestroy } from 'svelte';
	import { formatDate, updatePageView } from '$lib/helpers';
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import { CodeBlock, Blockquote, ViewCount } from '$lib/components';
	import { browser } from '$app/environment';
	import { Icon } from '$lib/ui-kit';
	import { views } from '$lib/stores';

	export let data;
	let timeout: NodeJS.Timeout;

	onDestroy(() => {
		clearTimeout(timeout);
	});

	$: path = `/${$page.params.language}/${$page.params.category}/${$page.params.slug}`;
	$: {
		if (browser) {
			timeout = setTimeout(() => {
				updatePageView({
					language: $page.params.language,
					category: $page.params.category,
					slug: $page.params.slug
				});
				views.update((value) => ({ ...value, [path]: (value[path] || 0) + 1 }));
			}, 10000);
		}
	}
</script>

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
			<span class="reading-time">
				<Icon name="clock" size={10} />
				{data.content.readingTime || '---'}
			</span>
		</div>
		<div class="content">
			<SvelteMarkdown
				source={data.content.context}
				renderers={{ code: CodeBlock, blockquote: Blockquote }}
			/>
		</div>
	</article>
{/if}

<style lang="scss">
	.content-container {
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
		padding: 24px;

		.title {
			font-size: 32px;
			line-height: 32px;
			font-weight: 500;
			margin-bottom: 12px;
		}

		.summary {
			display: flex;
			gap: 12px;
			font-size: 14px;
			color: var(--color-gray);

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

		.content {
			margin-top: 18px;
			margin-bottom: 30px;
		}
	}

	@include desktop {
		.content-container {
			padding: 72px 24px 32px;

			.content {
				margin-top: 32px;
				margin-bottom: 0;
			}
		}
	}
</style>
