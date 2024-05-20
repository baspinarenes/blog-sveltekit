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
			flex-shrink: 0;
			background-color: var(--side-menu-bg);
			border-right: 1px solid var(--border-color);
			padding: var(--spacing-lg) var(--spacing-md) var(--spacing-md);
		}
	}
</style>
