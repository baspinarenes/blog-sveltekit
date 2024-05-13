<script>
	import { RichText } from '$lib/components';

	export let data;
</script>

<svelte:head>
	<title>Journey</title>
	<meta name="description" content="My journey." />
</svelte:head>

<h1>{data.title}</h1>
<RichText document={data.contentJson} />
