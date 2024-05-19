<script lang="ts">
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';
	import { ContentMenuItem } from '$lib/components';
	import type { Content } from '$lib/types';

	export let contents: Content[] = [];

	$: title = $t(`common.navigation.${$page.params.category}`);
</script>

<div class="content-menu">
	<h2 class="header">{title}</h2>
	<div class="items">
		{#each contents as content}
			<ContentMenuItem
				title={content.title}
				slug={content.slug}
				publishedAt={content.publishedAt}
				category={content.category}
				readingTime={content.readingTime}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.content-menu {
		display: none;
		flex-direction: column;
		width: 280px;
		flex-shrink: 0;
		height: 100%;
		border-right: 1px solid var(--border-color);
		background-color: var(--color-bg);

		.header {
			font-size: 14px;
			padding: 16px;
			border-bottom: 1px solid var(--border-color);
		}

		.items {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-xs);
			padding: var(--spacing-md);
			overflow-y: auto;

			@include scroll-bar(6px, 8px);
		}
	}

	@include desktop {
		.content-menu {
			display: flex;
		}
	}
</style>
