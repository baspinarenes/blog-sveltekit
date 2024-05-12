<script lang="ts">
	import { t } from '$lib/i18n';

	export let translateKey: string;
	const title = $t(`common.navigation.${translateKey}`);
</script>

<h1>{title}</h1>
