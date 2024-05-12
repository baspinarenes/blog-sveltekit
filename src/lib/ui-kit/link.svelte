<script lang="ts">
	export let href: string;
	export let target: string = '_self';
	export let label: string;
</script>

<a {href} {target}>
	{label}
</a>
