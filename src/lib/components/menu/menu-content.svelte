<script lang="ts">
	import { Spacer, Seperator } from '$lib/ui-kit';
	import {
		LanguageSwitcher,
		ProfileCard,
		Copyright,
		Navigations,
		Socials
	} from '$lib/components';

	export let hideLanguageSwitcher = false;
</script>

<div class="menu-content">
	<ProfileCard />
	<Spacer size="md" />
	<div class="body">
		<Navigations />
		{#if !hideLanguageSwitcher}
			<Spacer min={28} />
		{/if}
		<Seperator />
		<Socials />
		{#if !hideLanguageSwitcher}
			<Spacer size="md" />
			<LanguageSwitcher />
		{/if}
		<Spacer size="md" />
		<Copyright />
	</div>
</div>

<style lang="scss">
	.menu-content {
		display: flex;
		flex-direction: column;
		height: 100%;

		.body {
			display: flex;
			flex-direction: column;
			overflow-y: auto;

			margin: 0 -20px;
			padding: 0 20px;
		}
	}

	@include desktop {
		.menu-content {
			.body {
				overflow-y: visible;
				height: 100%;
			}
		}
	}
</style>
