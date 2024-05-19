<script lang="ts">
	import { formatDate } from '$lib/helpers';
	import { Icon } from '$lib/ui-kit';
	import { locale } from '$lib/i18n';
	import { page } from '$app/stores';
	import { ViewCount } from '$lib/components';

	export let title: string;
	export let publishedAt: Date;
	export let slug: string;
	export let category: string;
	export let readingTime: number | undefined;

	$: path = `/${$locale}/${$page.params.category}/${slug}`;
</script>

<a class="content-item" href={path}>
	<strong class="title">{title}</strong>
	<div class="summary">
		<time datetime={publishedAt.toISOString()}>
			{formatDate(publishedAt, $locale)}
		</time>
		<span class="category"> #{category.toLowerCase().replace('/', '-')} </span>
		<ViewCount path={path} />
		<span class="reading-time">
			<Icon name="clock" size={13} />
			{readingTime || '---'}
		</span>
	</div>
</a>

<style lang="scss">
	.content-item {
		display: flex;
		flex-direction: column;
		padding: 12px 22px;
		border-bottom: 1px solid var(--border-color);
		color: var(--color-text);
		gap: var(--spacing-xs);

		&:hover {
			background-color: var(--color-light-gray);
		}

		&.active {
			color: var(--side-menu-navigation-active-text-color);
			background-color: var(--side-menu-navigation-active-bg);
			cursor: default;
			pointer-events: none;
		}

		&:not(.active):hover {
			background-color: var(--side-menu-navigation-hover-bg);
			transition: background-color 200ms linear;
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

			.reading-time {
				display: flex;
				align-items: center;
				gap: var(--spacing-xs);
			}
		}
	}
</style>
