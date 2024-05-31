<script lang="ts">
	import { Icon } from '$lib/ui-kit';

	export let type: string;
</script>

<div class="category-badge">
	<Icon name={type} />
</div>

<style lang="scss">
	.category-badge {
		display: inline-block;
		justify-content: center;
		align-items: center;
		width: fit-content;
	}
</style>
