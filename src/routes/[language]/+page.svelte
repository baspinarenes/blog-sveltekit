<script>
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="home-page">
	<h1 class="title">{$t('home.title')}</h1>
	<p>{$t('home.description')}</p>
</div>

<style lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		max-width: 800px;
		width: 100%;
		min-height: 100%;
		margin: 0 auto;
		padding: 68px 32px 32px;
	}
</style>
