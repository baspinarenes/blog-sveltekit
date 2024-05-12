<script>
	import { HamburgerMenuButton, LanguageSwitcher } from '$lib/components';
</script>

<div>
	<HamburgerMenuButton />
	<LanguageSwitcher />
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: space-between;
		padding: var(--spacing-md) var(--spacing-lg);
		border: 1px solid var(--border-color);
	}

	@include desktop {
		div {
			display: none;
		}
	}
</style>
