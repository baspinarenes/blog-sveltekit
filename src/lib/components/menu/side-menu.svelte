<script>
	import MenuContent from './menu-content.svelte';
</script>

<aside>
	<MenuContent />
</aside>

<style lang="scss">
	aside {
		display: none;
	}

	@include desktop {
		aside {
			display: block;
			height: var(--side-menu-height);
			width: var(--side-menu-width);
			min-width: var(--side-menu-min-width);
			max-width: var(--side-menu-max-width);
			background-color: var(--side-menu-bg);
			border-right: 1px solid var(--border-color);
			padding: var(--spacing-lg) var(--spacing-md) var(--spacing-md);
		}
	}
</style>
