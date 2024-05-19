<script lang="ts">
	import { Icon } from '$lib/ui-kit';
	import { views } from '$lib/stores';

	export let path: string;

	$: count = $views[path] || 0;
</script>

<div class="view-count">
	<Icon name="view" size={13} />
	{count || '---'}
</div>

<style lang="scss">
	.view-count {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
	}
</style>
