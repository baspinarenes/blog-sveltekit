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

	$: contentPathname = `/${$page.params.language}/${$page.params.category}/${slug}`;
	$: path = `/${$locale}/${$page.params.category}/${slug}`;
	$: active = $page.url.pathname.includes(contentPathname);
</script>

<a class="content-menu-item" class:active href={path}>
	<span class="title">{title}</span>
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
	.content-menu-item {
		padding: var(--spacing-sm) var(--spacing-md);
		font-size: 14px;
		border-radius: var(--border-radius-md);
		border: none;
		color: var(--color-text);
		font-weight: 400;

		&:hover {
			background-color: var(--color-light-gray);
		}

		&.active {
			color: var(--side-menu-navigation-active-text-color);
			background-color: var(--side-menu-navigation-active-bg);
			cursor: default;
			pointer-events: none;
			font-weight: 500;
		}

		&:not(.active):hover {
			background-color: var(--side-menu-navigation-hover-bg);
			transition: background-color 200ms linear;
		}

		.title {
			line-height: 0.7;
		}

		.summary {
			display: flex;
			gap: var(--spacing-sm);
			font-size: 12px;
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
	}
</style>
