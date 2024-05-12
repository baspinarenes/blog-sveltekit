<script lang="ts">
	import config from '$lib/blog.config';
	import Navigation from './navigation.svelte';
	import type { Language } from '$lib/types';
	import { locale } from '$lib/i18n';

	$: navigations = Object.entries(config.navigations[$locale as Language]);
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
