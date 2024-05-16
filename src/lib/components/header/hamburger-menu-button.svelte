<script lang="ts">
	import { Button, Icon, Drawer } from '$lib/ui-kit';
	import { MenuContent } from '$lib/components';

	let show = false;

	function toggleDrawer() {
		show = !show;
	}
</script>

<Button onClick={toggleDrawer}>
	<Icon name="menu" size={18} />
</Button>

<Drawer {show} onClose={toggleDrawer}>
	<MenuContent hideLanguageSwitcher />
</Drawer>
