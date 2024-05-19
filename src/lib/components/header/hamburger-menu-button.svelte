<script lang="ts">
	import { Button, Icon, Drawer } from '$lib/ui-kit';
	import { MenuContent } from '$lib/components';
	import { locale } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let asBackButton = false;
	let show = false;

	function toggleDrawer() {
		if (asBackButton) {
			goto(`/${$locale}/${$page.params.category}`);
		} else {
			show = !show;
		}
	}
</script>

<Button onClick={toggleDrawer}>
	{#if asBackButton}
		<Icon name="back" size={18} />
	{:else}
		<Icon name="menu" size={18} />
	{/if}
</Button>

<Drawer {show} onClose={toggleDrawer}>
	<MenuContent hideLanguageSwitcher />
</Drawer>
