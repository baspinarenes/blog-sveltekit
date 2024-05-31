<script lang="ts">
	import { formatDate } from '$lib/helpers';
	import { locale } from '$lib/i18n';
	import { page } from '$app/stores';
	import { ViewCount, ReadingTime } from '$lib/components';

	export let title: string;
	export let publishedAt: Date;
	export let slug: string;
	export let category: string;
	export let readingMinute: number;

	$: path = `/${$locale}/${$page.params.category}/${slug}`;
</script>

<a class="content-item" href={path}>
	<strong class="title">{title}</strong>
	<div class="summary">
		<time datetime={publishedAt.toISOString()}>
			{formatDate(publishedAt, $locale)}
		</time>
		<span class="category"> #{category.toLowerCase().replace('/', '-')} </span>
		<ViewCount {path} />
		<ReadingTime value={readingMinute} />
	</div>
</a>

<style lang="scss">
	.content-item {
		display: flex;
		flex-direction: column;
		padding: 12px 24px;
		border-bottom: 1px solid var(--border-color);
		color: var(--color-text);
		gap: var(--spacing-xs);

		&:hover {
			background-color: var(--color-light-gray);
		}

		.title {
			line-height: 1.3;
		}

		.summary {
			display: flex;
			gap: var(--spacing-sm);
			font-size: 13px;
			color: var(--color-gray);
			font-weight: 400;

			.category {
				margin-right: auto;
			}
		}
	}
</style>
