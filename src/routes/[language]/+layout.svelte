<script lang="ts">
	import '$lib/styles/styles.scss';
	import { SideMenu, MobileHeader } from '$lib/components';

	export let data;
</script>

<div class="app">
	<!-- Desktop -->
	<SideMenu />

	<!-- Mobile -->
	<MobileHeader titleKey={data.category} />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		width: 100%;

		main {
			width: 100%;
		}
	}

	@include desktop {
		.app {
			flex-direction: row;
			min-height: 100vh;

			main {
				flex: 1;
				width: 100%;
				height: 100vh;
			}
		}
	}
</style>
