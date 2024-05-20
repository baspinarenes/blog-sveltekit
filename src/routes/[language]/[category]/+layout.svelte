<script lang="ts">
	import '$lib/styles/styles.scss';
	import { ContentMenu } from '$lib/components';

	export let data;
</script>

<ContentMenu contents={data.contents} />

<div class="content">
	<slot />
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow-y: auto;
		@include scroll-bar(12px, 8px);
	}
</style>
