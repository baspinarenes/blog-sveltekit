<script lang="ts">
	import { ContentStatus } from '$lib/components';
	import { capitalize } from '$lib/helpers';
	import ContentList from '$lib/components/content/content-list.svelte';

	export let data;
</script>

<svelte:head>
	<title>{capitalize(data.category)}</title>
</svelte:head>

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
		// text-align: center;
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
