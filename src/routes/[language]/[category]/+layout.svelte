<script lang="ts">
	import '$lib/styles/styles.scss';
	import { ContentMenu } from '$lib/components';

	export let data;
</script>

<div>
	<ContentMenu contents={data.contents} />
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	div {
		display: flex;
		height: 100%;

		.content {
			display: flex;
			flex-direction: column;
			width: 100%;
			overflow-y: auto;
			@include scroll-bar(12px, 8px);
		}
	}
</style>
