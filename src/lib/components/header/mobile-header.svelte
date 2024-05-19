<script>
	import {
		HamburgerMenuButton,
		LanguageSwitcher,
		HeaderTitle
	} from '$lib/components';
	import { Spacer } from '$lib/ui-kit';
	import { page } from '$app/stores';

	export let titleKey = '';

	$: isCollectionItem = $page.params.slug !== undefined;
</script>

<div class="mobile-header">
	<HamburgerMenuButton asBackButton={isCollectionItem} />
	<Spacer size="md" type="width" />
	<HeaderTitle {titleKey} />
	<Spacer type="width" />
	<LanguageSwitcher />
</div>

<style lang="scss">
	.mobile-header {
		display: flex;
		align-items: center;
		padding: var(--spacing-md) var(--spacing-xl);
		border-bottom: 1px solid var(--border-color);
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		width: 100%;
		background-color: var(--color-bg);
		z-index: 30;
	}

	@include desktop {
		.mobile-header {
			display: none;
		}
	}
</style>
