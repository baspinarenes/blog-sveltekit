<script lang="ts">
	import { t } from '$lib/i18n';
	import { IconFile, IconFileUnknown } from '@tabler/icons-svelte';

	export let type: 'no-select' | 'not-found';

	$: message = $t(`common.status.${type}`);
</script>

<div class="content-status">
	<IconFile size="64" />
	<p>{message}</p>
</div>

<style lang="scss">
	.content-status {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-md);
		height: 100%;
		color: var(--color-light-gray);

		p {
			font-size: 18px;
			color: rgb(207, 207, 207);
		}
	}
</style>
