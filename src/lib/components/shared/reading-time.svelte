<script lang="ts">
	import { Icon } from '$lib/ui-kit';

	export let value: number;
</script>

<div class="reading-time">
	<Icon name="clock" size={13} />
	{value || '---'} min
</div>

<style lang="scss">
	.reading-time {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
	}
</style>
