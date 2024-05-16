<script>
	import { t } from '$lib/i18n';
	import config from '$lib/blog.config';

	const { name, age } = config.author;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="home-page">
	<h1 class="title">{$t('home.title')}</h1>
	<p>{$t('home.description', { name, age })}</p>
</div>

<style lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		max-width: 800px;
		width: 100%;
		min-height: 100%;
		margin: 0 auto;
		padding: 32px 24px;
	}

	@include desktop {
		.home-page {
			padding: 96px 24px 32px;
		}
	}
</style>
