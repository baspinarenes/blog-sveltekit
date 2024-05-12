<script>
	import config from '$lib/blog.config';
	import Navigation from './navigation.svelte';

	const navigations = Object.entries(config.navigations.tr);
</script>

<div>
	{#each navigations as navigation}
		<Navigation label={navigation[0]} href={navigation[1]} />
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}
</style>
