<script lang="ts">
	import { JourneyGroup } from '$lib/components';
	import { orderAlphabetically } from '$lib/helpers/common.js';

	export let data;

	$: journey = data.journey || {};

	$: orderedYears = Object.keys(journey).sort(orderAlphabetically);
</script>

<h1>Journey</h1>
<div class="journey-page">
	{#if journey}
		{#each orderedYears as year}
			<JourneyGroup {year} items={journey[year]} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.journey-page {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	@include desktop {
		.journey-page {
			gap: 48px;
		}
	}
</style>
