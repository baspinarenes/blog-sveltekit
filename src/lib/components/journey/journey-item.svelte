<script lang="ts">
	import { Icon } from '$lib/ui-kit';

	export let title: string;
	export let description: string;
	export let image: string | undefined;
</script>

<div class="journey-item">
	<div class="icon-container">
		<Icon name="plus" size={14} />
	</div>
	<div class="body">
		<span class="title">{title}</span>
		<p class="description">{description}</p>
		{#if image}
			<img class="image" src={image} alt={title} />
		{/if}
	</div>
</div>

<style lang="scss">
	.journey-item {
		display: flex;
		flex-direction: row;
		gap: 18px;
		margin-top: 5px;
		position: relative;
		padding-bottom: 12px;

		&:not(:last-child)::after {
			content: '';
			display: block;
			position: absolute;
			left: 10px;
			z-index: -10;
			top: 5px;
			width: 1px;
			height: 100%;
			background-color: #e2e8f0;
		}

		.icon-container {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #000;
			color: #fff;
			width: 22px;
			height: 22px;
			border-radius: 50%;
			flex-shrink: 0;
			margin-top: 1px;
		}

		.body {
			display: flex;
			flex-direction: column;
			font-size: 16px;

			.title {
				font-weight: 500;
			}

			.image {
				margin-top: 20px;
				border-radius: 16px;
			}
		}
	}

	@include desktop {
		.journey-item {
			padding-bottom: 32px;
		}
	}
</style>
