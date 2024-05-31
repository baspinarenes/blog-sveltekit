<script lang="ts">
	import type { JourneyItem as JourneyItemType } from '$lib/types';
	import JourneyItem from './journey-item.svelte';

	export let year: string;
	export let items: JourneyItemType[];
</script>

<div class="journey-group">
	<h3 class="year">{year}</h3>
	<ul>
		{#each items as journeyItem}
			<JourneyItem
				title={journeyItem.title}
				description={journeyItem.description}
				image={journeyItem.image}
			/>
		{/each}
	</ul>
</div>

<style lang="scss">
	.journey-group {
		display: flex;
		flex-direction: column;

		ul {
			margin: 0;
			margin-bottom: 12px;
			gap: 0;
		}

		.year {
			font-size: 22px;
			line-height: 36px;
			font-weight: 500;
		}
	}

	@include desktop {
		.journey-group {
			flex-direction: row;

			ul {
				margin: 0;
			}

			.year {
				margin-right: 24px;
			}
		}
	}
</style>
