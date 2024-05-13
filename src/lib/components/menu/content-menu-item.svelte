<script lang="ts">
	import { formatDate } from '$lib/helpers';
	import { locale } from '$lib/i18n';
	import { page } from '$app/stores';
	import { Icon } from '$lib/ui-kit';

	export let title: string;
	export let publishedAt: Date;
	export let slug: string;
	export let views: number | undefined;
	export let readingTime: number | undefined;

	$: path = `/${$locale}/${$page.params.category}/${slug}`;

	$: active = $page.url.pathname.includes(
		`/${$page.params.language}/${$page.params.category}${slug}`
	);
</script>

<a class="content-menu-item" class:active href={path}>
	<span class="title">{title}</span>
	<div class="summary">
		<span class="date">{formatDate(publishedAt, $locale)}</span>

		{#if views}
			<span class="views">
				<Icon name="view" size={10} />
				{views}
			</span>
		{/if}

		{#if readingTime}
			<span class="reading-time">
				<Icon name="clock" size={10} />
				{readingTime}
			</span>
		{/if}

		<!-- {#if (!views || !readingTime) && tags.length}
			<span class="tags"> #{tags.join(', #')} </span>
		{/if} -->
	</div>
</a>

<style lang="scss">
	.content-menu-item {
		padding: var(--spacing-sm) var(--spacing-md);
		font-size: 14px;
		border-radius: var(--border-radius-md);
		border: none;
		color: var(--color-text);

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
			font-weight: 600;
		}

		.summary {
			display: flex;
			gap: var(--spacing-sm);
			font-size: 12px;
			color: var(--color-helper);

			.date {
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
