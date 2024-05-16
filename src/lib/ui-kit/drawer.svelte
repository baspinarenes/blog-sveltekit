<script lang="ts">
	import { fly } from '$lib/helpers/transitions';

	export let show: boolean = false;
	export let onClose: () => void;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->

{#if show}
	<div class="overlay" onclick={onClose}>
		<div class="drawer" transition:fly={{ y: 600, duration: 300, opacity: 1 }}>
			<div class="header">
				<div class="line"></div>
			</div>
			<div class="body">
				<slot />
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);

		.drawer {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			gap: var(--spacing-xl);
			flex-direction: column;
			background-color: var(--color-white);
			max-height: 82vh;
			border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
			padding: var(--spacing-lg) var(--spacing-lg) 0;
			z-index: 1000;

			.header {
				display: flex;
				justify-content: center;
				align-items: center;

				.line {
					width: 100px;
					height: 8px;
					background-color: var(--color-light-gray);
					border-radius: var(--border-radius-md);
				}
			}

			.body {
				flex-shrink: 0;
				height: 100%;
			}
		}
	}
</style>
