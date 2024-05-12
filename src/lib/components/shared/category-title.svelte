<script lang="ts">
	import { t } from '$lib/translation';

	export let translateKey: string;
	const title = $t(`common.navigation.${translateKey}`);
</script>

<h1>{title}</h1>
