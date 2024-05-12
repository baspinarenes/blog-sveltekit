<script>
	import config from '$lib/blog.config';
	import Navigation from './navigation.svelte';

	const socials = Object.entries(config.author.socials);
</script>

<div>
	{#each socials as social}
		<Navigation label={social[0]} href={social[1].url} />
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}
</style>
