<script lang="ts">
	export let size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fill' =
		'fill';
	export let min: number = 0;
	export let type: 'width' | 'height' = 'height';
</script>

<div
	class="spacer"
	class:fill={size == 'fill'}
	style="
		min-{type}: {min}px;
		{type}: {size !== 'fill' ? `var(--spacing-${size})` : ''}
	"
></div>

<style lang="scss">
	.spacer {
		flex-shrink: 0;

		&.fill {
			flex: 1;
		}
	}
</style>
