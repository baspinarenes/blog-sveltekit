<script lang="ts">
	import '$lib/styles/styles.scss';
	import { ContentMenu } from '$lib/components';
</script>

<div>
	<ContentMenu />
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
		height: 100%;
	}
</style>
