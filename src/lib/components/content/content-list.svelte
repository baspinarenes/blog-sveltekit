<script lang="ts">
	import type { Content } from '$lib/types';
	import { ContentItem } from '.';

	export let contents: Content[];
</script>

<div class="content-list">
	{#each contents as content}
		<ContentItem
			title={content.title}
			publishedAt={content.publishedAt}
			slug={content.slug}
			category={content.category}
			readingTime={content.readingTime}
		/>
	{/each}
</div>

<style lang="scss">
	.content-list {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
