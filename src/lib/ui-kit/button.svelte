<script lang="ts">
	export let onClick: () => void = () => alert('Not implemented');
</script>

<button class={$$props.class || ''} onclick={onClick}>
	<slot />
</button>

<style lang="scss">
	button {
	}
</style>
