<script lang="ts">
	import '$lib/styles/styles.scss';
	import { ContentMenu } from '$lib/components';
</script>

<div>
	<ContentMenu />
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
			justify-content: center;
			align-items: center;
			width: 100%;
		}
	}
</style>
