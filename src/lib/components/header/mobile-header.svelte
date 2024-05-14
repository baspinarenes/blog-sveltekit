<script>
	import {
		HamburgerMenuButton,
		LanguageSwitcher,
		HeaderTitle
	} from '$lib/components';
	import { Spacer } from '$lib/ui-kit';

	export let titleKey = '';
</script>

<div class="mobile-header">
	<HamburgerMenuButton />
	<Spacer size="md" type="width" />
	<HeaderTitle {titleKey} />
	<Spacer type="width" />
	<LanguageSwitcher />
</div>

<style lang="scss">
	.mobile-header {
		display: flex;
		align-items: center;
		padding: var(--spacing-md) var(--spacing-lg);
		border-bottom: 1px solid var(--border-color);
		position: fixed;
		width: 100%;
		background-color: var(--color-bg);
	}

	@include desktop {
		.mobile-header {
			display: none;
		}
	}
</style>
