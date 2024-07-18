<script lang="ts">
	export let ordered: boolean;
	export let items;
</script>

<ul class:ordered>
	<slot />
</ul>

<style lang="scss">
	li {
	}
</style>
