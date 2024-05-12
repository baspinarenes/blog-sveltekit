<script lang="ts">
	import { page } from '$app/stores';
	import { isExternal } from '$lib/helpers';
	import { Icon } from '$lib/ui-kit';
	import { t } from '$lib/i18n';

	export let label: string;
	export let href: string;

	const external = isExternal(href);
	$: active = href === $page.url.pathname;
</script>

<a
	class="navigation"
	class:active
	{href}
	target={external ? '_blank' : undefined}
>
	<div class="left-side">
		<Icon name={label} />
		{$t(`common.navigation.${label}`)}
	</div>
	{#if external}
		<div class="right-side">
			<Icon name="external" />
		</div>
	{/if}
</a>

<style lang="scss">
	.navigation {
		padding: var(--spacing-sm);
		border-radius: var(--border-radius-md);
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;

		.left-side {
			display: flex;
			align-items: center;
			gap: var(--spacing-sm);
		}

		.right-side {
			margin-left: auto;
		}

		&.active {
			color: var(--side-menu-navigation-active-text-color);
			background-color: var(--side-menu-navigation-active-bg);
			cursor: default;
			pointer-events: none;
		}

		&:not(.active):hover {
			background-color: var(--side-menu-navigation-hover-bg);
			transition: background-color 200ms linear;
		}
	}
</style>
