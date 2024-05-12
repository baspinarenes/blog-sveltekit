<script lang="ts">
	export let size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fill' =
		'fill';
	export let minHeight: number = 0;
</script>

<div
	class="spacer"
	class:fill={size == 'fill'}
	style="min-height: {minHeight}px;"
	style:height={size !== 'fill' ? `var(--spacing-${size})` : ''}
></div>

<style lang="scss">
	.spacer {
		flex-shrink: 0;

		&.fill {
			flex: 1;
		}
	}
</style>
