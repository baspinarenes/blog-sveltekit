<script lang="ts">
	import { t } from '$lib/i18n';
	import { IconFile } from '@tabler/icons-svelte';

	export let type: 'no-select' | 'not-found' | 'no-content';

	$: message = $t(`common.status.${type}`);

	$: console.log(message);
</script>

<div class="content-status">
	<IconFile size="60" />
	<p class="message">
		{@html message}
	</p>
</div>

<style lang="scss">
	.content-status {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-md);
		height: calc(100vh - 64px);
		color: var(--color-light-gray);
		width: 100%;

		p {
			font-size: 18px;
			color: rgb(207, 207, 207);
		}
	}

	@include desktop {
		.content-status {
			height: 100%;

			.message {
				font-size: 18px;
				text-align: center;
				color: rgb(207, 207, 207);
			}
		}
	}
</style>
