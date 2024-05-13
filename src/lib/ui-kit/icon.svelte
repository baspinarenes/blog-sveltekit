<script lang="ts">
	import {
		IconArrowUpRight,
		IconBrandGithub,
		IconBrandLinkedin,
		IconBrandTwitter,
		IconBrandYoutube,
		IconCode,
		IconLayout,
		IconNotebook,
		IconSend,
		IconSignature,
		IconTools,
		IconLanguage,
		IconMenu2,
		IconMasksTheater,
		IconClock,
		IconEye,
		IconBrain,
		IconPlus
	} from '@tabler/icons-svelte';

	export let name: string;
	export let size: number = 18;

	let icon = {
		twitter: IconBrandTwitter,
		github: IconBrandGithub,
		linkedin: IconBrandLinkedin,
		youtube: IconBrandYoutube,

		home: IconLayout,
		journey: IconSend,
		article: IconNotebook,
		writing: IconSignature,
		snippet: IconCode,
		tool: IconTools,
		culture: IconMasksTheater,
		thought: IconBrain,

		external: IconArrowUpRight,
		language: IconLanguage,
		menu: IconMenu2,
		clock: IconClock,
		view: IconEye,
		plus: IconPlus
	}[name];
</script>

<svelte:component this={icon} class="logo" {size} />

<style lang="scss">
	:global(.logo) {
		flex-shrink: 0;
	}
</style>
