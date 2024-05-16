<script lang="ts">
	import { Icon } from '$lib/ui-kit';

	export let content: string;

	let copied = false;

	let copyToClipboard = () => {
		copied = true;
		navigator.clipboard.writeText(content);
		setTimeout(() => (copied = false), 1500);
	};

	$: iconName = copied ? 'complete' : 'copyboard';
</script>

<button class="copy-button" onclick={copyToClipboard}>
	<Icon name={iconName} />
</button>

<style lang="scss">
	.copy-button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px 12px;
	}
</style>
