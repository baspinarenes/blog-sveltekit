<script>
	import { formatDate } from '$lib/helpers';
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import { CodeBlock, Blockquote, ProfileCard } from '$lib/components';

	export let data;
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
