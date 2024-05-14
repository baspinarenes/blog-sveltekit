<script lang="ts">
	import { ContentStatus, ContentMenu } from '$lib/components';
	import ContentList from '$lib/components/content/content-list.svelte';

	export let data;
</script>

<div class="phone">
	{#if data.contents.length > 0}
		<ContentList contents={data.contents} />
	{:else}
		<ContentStatus type="no-content" />
	{/if}
</div>

<div class="desktop">
	<ContentStatus type="no-select" />
</div>

<style lang="scss">
	.phone {
		display: flex;
	}

	.desktop {
		display: none;
	}

	@include desktop {
		.phone {
			display: none;
		}

		.desktop {
			display: flex;
			height: 100%;
		}
	}
</style>
