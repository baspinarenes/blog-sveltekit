<script>
	import { t } from '$lib/i18n';
	export let titleKey = '';
</script>

{#if titleKey}
	<h2>{$t(`common.navigation.${titleKey}`)}</h2>
{/if}

<style lang="scss">
	h2 {
		font-size: 14px;
		margin-bottom: 0;
	}
</style>
